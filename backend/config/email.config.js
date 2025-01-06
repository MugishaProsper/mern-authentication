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
  } catch (error) {
    console.log('Error sending email:', error.message);
  }
};

export const sendResetPassword = async (recieverEmail, resetPassword) => {
  const mailOptions = {
    from: '"MERN Authentication" <nelsonprox92@gmail.com>',
    to: recieverEmail,
    subject: 'Reset Password',
    text: 'This is an email sent to reset your password',
    html : `<html><body><div><div> Your reset password is : </div><h1>${resetPassword}</h1></div></body></html>`
  };
  try {
    transport.sendMail(mailOptions);
  } catch (error) {
    console.error(error.message);
  }
}