// pages/api/sendFeedback.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.FEEDBACK_EMAIL,
        pass: process.env.FEEDBACK_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Feedback from ${email}" <${process.env.FEEDBACK_EMAIL}>`,
      to: 'parthlangalia627@gmail.com',
      subject: 'New Feedback Received',
      text: `Email: ${email}\n\nFeedback:\n${message}`,
    });

    res.status(200).json({ message: 'Feedback sent successfully.' });
  } catch (error) {
    console.error('Error sending feedback:', error);
    res.status(500).json({ message: 'Error sending feedback.' });
  }
}
