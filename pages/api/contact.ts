import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, language } = req.body;

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez remplir tous les champs requis'
          : 'Please fill in all required fields'
      });
    }

    // Configuration du transporteur d'emails
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Préparation du contenu de l'email
    const emailContent = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `[Contact Form] ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(emailContent);

    // Email de confirmation
    const confirmationEmail = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: language === 'fr' 
        ? 'Confirmation de votre message - Tao Jouet'
        : 'Message Confirmation - Tao Jouet',
      html: language === 'fr'
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

    await transporter.sendMail(confirmationEmail);

    return res.status(200).json({
      success: true,
      message: language === 'fr'
        ? 'Votre message a été envoyé avec succès'
        : 'Your message has been sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: language === 'fr'
        ? 'Une erreur est survenue lors de l\'envoi du message'
        : 'An error occurred while sending the message'
    });
  }
} 