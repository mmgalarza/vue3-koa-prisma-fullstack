import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (ctx: Context, next: Next) => {
  const authHeader = ctx.headers.authorization;
  if (!authHeader) {
    ctx.status = 401;
    ctx.body = { message: 'No token provided' };
    return;
  }

  const token = authHeader.split(' ')[1];
  
  // 1. SOLO intentamos validar el token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    ctx.state.user = decoded;
  } catch (err) {
    ctx.status = 401;
    ctx.body = { message: 'Token invalid or expired', details: err };
    return; // Cortamos aquí porque el token sí está mal
  }

  // 2. Si llegamos aquí, el token es válido. 
  // Ejecutamos el siguiente paso FUERA del try/catch de arriba.
  // Si algo falla dentro de next(), Koa lo mandará al gestor de errores global.
  await next(); 
};