import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const MAIL_ENABLED = process.env.MAIL_ENABLED === 'true';

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export const enviarEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  if (!MAIL_ENABLED) {
    console.log('📭 MAIL DESHABILITADO');
    console.log({ to, subject, html });
    return;
  }

  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token || '',
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject,
    html,
  });
};
