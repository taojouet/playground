import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { content } from '@/data/content';

type ResponseData = {
  success: boolean;
  message: string;
};

type Language = 'fr' | 'en';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  let language: Language = 'fr';

  try {
    // Log détaillé des variables d'environnement
    console.log('=== Environment Variables Check ===');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_FROM:', process.env.SMTP_FROM);
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);
    console.log('SMTP_PASSWORD length:', process.env.SMTP_PASSWORD?.length);
    console.log('================================');

    const { name, email, type, company, phone, subject, message, lang } = req.body;
    language = (lang as Language) || 'fr';

    // Récupération des traductions
    const t = content[language].contact;

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez remplir tous les champs requis'
          : 'Please fill in all required fields'
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