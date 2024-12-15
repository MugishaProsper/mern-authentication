import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.mailtrap_host,
  port: process.env.mailtrap_port,
  auth: {
    user: process.env.mailtrap_user,
    pass: process.env.mailtrap_pass
  }
});

export const sendVerificationEmail = async (recipient_email, verification_code) => {
  const mailOptions = {
    from: '"MERN Authentication" <nelsonprox92@gmail.com>',
    to: recipient_email,
    subject: 'Account Verification',
    text: 'This is an email sent to verify your email',
    html : `<html><body><div><div> Your verification code is : </div><h1>${verification_code}</h1></div></body></html>`
  };

  try {
    await transport.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error.message);
  }
};