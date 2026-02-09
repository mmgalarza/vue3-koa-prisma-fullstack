export const activationEmailTemplate = (activationUrl: string) => `
  <h2>Activa tu cuenta</h2>
  <p>Gracias por registrarte en nuestra plataforma.</p>
  <p>Haz click en el siguiente enlace para activar tu cuenta:</p>
  <a href="${activationUrl}">Activar cuenta</a>
  <p>Este enlace expira en 24 horas.</p>
`;
