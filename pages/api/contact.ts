import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { content } from '@/data/content';

type ResponseData = {
  success: boolean;
  message: string;
};

type Language = 'fr' | 'en';

// --- Rate limiting simple en mémoire (par IP) ---
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requêtes par fenêtre

type RateLimitInfo = {
  count: number;
  firstRequestTime: number;
};

const ipRequestCounts = new Map<string, RateLimitInfo>();

function getClientIp(req: NextApiRequest): string {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff.length > 0) {
    return xff.split(',')[0].trim();
  }
  if (Array.isArray(xff) && xff.length > 0) {
    return xff[0].split(',')[0].trim();
  }
  return (req.socket.remoteAddress || 'unknown').toString();
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const info = ipRequestCounts.get(ip);

  if (!info) {
    ipRequestCounts.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (now - info.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    // Nouvelle fenêtre
    ipRequestCounts.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (info.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  info.count += 1;
  ipRequestCounts.set(ip, info);
  return false;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  let language: Language = 'fr';

  try {
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        success: false,
        message:
          language === 'fr'
            ? 'Trop de demandes depuis votre adresse IP. Merci de réessayer plus tard.'
            : 'Too many requests from your IP address. Please try again later.',
      });
    }

    // Log détaillé des variables d'environnement
    console.log('=== Environment Variables Check ===');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_FROM:', process.env.SMTP_FROM);
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);
    console.log('SMTP_PASSWORD length:', process.env.SMTP_PASSWORD?.length);
    console.log('================================');

    const { name, email, type, company, phone, subject, message, lang, honeypot, captchaToken } = req.body;
    language = (lang as Language) || 'fr';

    // Récupération des traductions
    const t = content[language].contact;

    // Vérification reCAPTCHA
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!captchaToken || typeof captchaToken !== 'string') {
        return res.status(400).json({
          success: false,
          message:
            language === 'fr'
              ? 'Vérification CAPTCHA manquante ou invalide.'
              : 'Missing or invalid CAPTCHA verification.',
        });
      }

      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: captchaToken,
          }),
        });

        const verifyData = (await verifyRes.json()) as { success: boolean; score?: number; action?: string };

        if (!verifyData.success) {
          console.warn('reCAPTCHA verification failed:', verifyData);
          return res.status(400).json({
            success: false,
            message:
              language === 'fr'
                ? 'La vérification CAPTCHA a échoué. Merci de réessayer.'
                : 'CAPTCHA verification failed. Please try again.',
          });
        }
      } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return res.status(500).json({
          success: false,
          message:
            language === 'fr'
              ? 'Erreur lors de la vérification du CAPTCHA.'
              : 'Error while verifying CAPTCHA.',
        });
      }
    } else {
      console.warn('RECAPTCHA_SECRET_KEY is not set. Skipping CAPTCHA verification on backend.');
    }

    // Protection anti-spam basique : champ honeypot caché
    if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
      // On fait semblant que tout s'est bien passé pour ne pas aider les bots à s'adapter
      return res.status(200).json({
        success: true,
        message:
          language === 'fr'
            ? 'Votre message a été envoyé avec succès'
            : 'Your message has been sent successfully',
      });
    }

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez remplir tous les champs requis'
          : 'Please fill in all required fields'
      });
    }

    // Filtre anti-spam simple : bloque les messages trop "aléatoires"
    const normalizedMessage = String(message).trim();
    const normalizedSubject = String(subject).trim();

    const hasSpaceInMessage = /\s/.test(normalizedMessage);
    const hasVowelInMessage = /[aeiouyàâäéèêëïîôöùûüAEIOUY]/.test(normalizedMessage);

    // Si le message est très court OU sans espace OU sans voyelle, on le considère comme suspect
    if (
      normalizedMessage.length < 20 ||
      !hasSpaceInMessage ||
      !hasVowelInMessage
    ) {
      return res.status(400).json({
        success: false,
        message:
          language === 'fr'
            ? 'Votre message semble incomplet. Merci de détailler un peu plus votre demande.'
            : 'Your message seems incomplete. Please provide a bit more detail.',
      });
    }

    // Vérification des variables d'environnement requises
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Missing required SMTP configuration:');
      console.error('SMTP_HOST:', process.env.SMTP_HOST);
      console.error('SMTP_PORT:', process.env.SMTP_PORT);
      console.error('SMTP_USER:', process.env.SMTP_USER);
      console.error('SMTP_PASSWORD is set:', !!process.env.SMTP_PASSWORD);
      return res.status(500).json({
        success: false,
        message: language === 'fr'
          ? 'Configuration du serveur de messagerie manquante'
          : 'Missing email server configuration'
      });
    }

    // Configuration du transporteur d'emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      debug: true,
      logger: true
    });

    // Vérification de la connexion
    try {
      console.log('Attempting to verify SMTP connection...');
      console.log('Using Gmail SMTP configuration');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      console.error('SMTP connection verification failed:', error);
      return res.status(500).json({
        success: false,
        message: language === 'fr'
          ? 'Erreur de connexion au serveur de messagerie'
          : 'Email server connection error'
      });
    }

    // Préparation du contenu de l'email
    const emailContent = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: type === 'quote' 
        ? `[${language === 'fr' ? 'Demande de devis' : 'Quote Request'}] ${subject}`
        : `[${language === 'fr' ? 'Formulaire de contact' : 'Contact Form'}] ${subject}`,
      html: `
        <h2>${type === 'quote' 
          ? (language === 'fr' ? 'Nouvelle demande de devis' : 'New quote request')
          : (language === 'fr' ? 'Nouveau message de contact' : 'New contact message')}</h2>
        <p><strong>${language === 'fr' ? 'Nom' : 'Name'}:</strong> ${name}</p>
        <p><strong>${language === 'fr' ? 'Email' : 'Email'}:</strong> ${email}</p>
        ${company ? `<p><strong>${language === 'fr' ? 'Entreprise' : 'Company'}:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>${language === 'fr' ? 'Téléphone' : 'Phone'}:</strong> ${phone}</p>` : ''}
        <p><strong>${language === 'fr' ? 'Sujet' : 'Subject'}:</strong> ${subject}</p>
        <p><strong>${language === 'fr' ? 'Message' : 'Message'}:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envoi de l'email
    try {
      console.log('Attempting to send email...');
      console.log('From:', emailContent.from);
      console.log('To:', emailContent.to);
      await transporter.sendMail(emailContent);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({
        success: false,
        message: language === 'fr'
          ? 'Erreur lors de l\'envoi de l\'email'
          : 'Error sending email'
      });
    }

    // Email de confirmation
    const confirmationEmail = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: type === 'quote'
        ? language === 'fr'
          ? 'Confirmation de votre demande de devis - Tao Jouet'
          : 'Quote Request Confirmation - Tao Jouet'
        : language === 'fr'
          ? 'Confirmation de votre message - Tao Jouet'
          : 'Message Confirmation - Tao Jouet',
      html: type === 'quote'
        ? language === 'fr'
          ? `
            <h2>Merci pour votre demande de devis</h2>
            <p>Bonjour ${name},</p>
            <p>J'ai bien reçu votre demande de devis et je vous répondrai dans les plus brefs délais.</p>
            <p>Voici un récapitulatif de votre demande :</p>
            ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>Cordialement,<br>Tao Jouet</p>
          `
          : `
            <h2>Thank you for your quote request</h2>
            <p>Hello ${name},</p>
            <p>I have received your quote request and will get back to you as soon as possible.</p>
            <p>Here is a summary of your request:</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>Best regards,<br>Tao Jouet</p>
          `
        : language === 'fr'
          ? `
            <h2>Merci de m'avoir contacté</h2>
            <p>Bonjour ${name},</p>
            <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
            <p>Voici un récapitulatif de votre message :</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>Cordialement,<br>Tao Jouet</p>
          `
          : `
            <h2>Thank you for contacting me</h2>
            <p>Hello ${name},</p>
            <p>I have received your message and will get back to you as soon as possible.</p>
            <p>Here is a summary of your message:</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>Best regards,<br>Tao Jouet</p>
          `,
    };

    try {
      console.log('Attempting to send confirmation email...');
      await transporter.sendMail(confirmationEmail);
      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      // On continue même si l'email de confirmation échoue
    }

    return res.status(200).json({
      success: true,
      message: type === 'quote'
        ? language === 'fr'
          ? 'Votre demande de devis a été envoyée avec succès'
          : 'Your quote request has been sent successfully'
        : language === 'fr'
          ? 'Votre message a été envoyé avec succès'
          : 'Your message has been sent successfully'
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({
      success: false,
      message: language === 'fr'
        ? 'Une erreur inattendue est survenue'
        : 'An unexpected error occurred'
    });
  }
} 