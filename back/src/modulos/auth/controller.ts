import { Context } from "koa";
import { LoginDTO, LoginSchema, RegisterDTO, RegisterSchema, ResendActivationSchema, ResendActivationDTO, RequestResetPasswordSchema, ResetPasswordSchema  } from "./dto";
import * as authService from "./service";
import { generarToken, generarTokenActivacion, verificarTokenActivacion, generarTokenResetPassword, verificarActionToken } from '@utils/jwt.util';
import { Rol } from "@prisma/prisma/enums";
import { enviarEmail } from '@utils/mail.util';
import { activationEmailTemplate } from '@utils/mail-template';

// import { enviarEmail } from '../utils/mail.util'; // mock o real

/**
 * POST /auth/login
 */
export const login = async (ctx: Context) => {
  try {
    // Validar request con Zod
    const dto: LoginDTO = LoginSchema.parse(ctx.request.body);

    const user = await authService.autenticarUsuario(dto.email, dto.password);

    if (user === 'INACTIVO') {
      ctx.status = 403;
      ctx.body = { message: 'Cuenta no activada. Revisa tu email.' };
      return;
    }

    if (!user) {
      ctx.status = 401;
      ctx.body = { message: "Credenciales inválidas" };
      return;
    }

    // Aquí podrías generar JWT o sesión
    const token = generarToken({ id: user.idUsuario, rol: user.rol as Rol });
    ctx.status = 200;
    ctx.body = {
      message: "Login exitoso",
      user: {
        id: user.idUsuario,
        username: user.username,
        email: user.email,
        nombre: user.nombre,
        rol: user.rol,
        idCliente: user.cliente?.idCliente || null
      },
      token,
      expiresIn: 3600, // 1 hora
    };
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { message: error?.message || "Error en login" };
  }
};

/**
 * POST /auth/register
 */
export const register = async (ctx: Context) => {
  try {
    const dto: RegisterDTO = RegisterSchema.parse(ctx.request.body);

    const user = await authService.registrarUsuario(dto);
    const activationToken = generarTokenActivacion(user.idUsuario);
    const activationUrl = `${process.env.FRONTEND_URL}/activate?token=${activationToken}`;
    
    // 🔔 aquí iría tu servicio de correo
    console.log('ACTIVATION URL:', activationUrl);

    ctx.status = 201;
    ctx.body = {
      message: "Usuario registrado. Revisa tu email para activar la cuenta.",
    };
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { message: error?.message || "Error en registro" };
  }
};

/**
 * activate /auth/activate?token=...
 */
export const activateAccount = async (ctx: Context) => {
  try {
    const token = ctx.query.token as string;
    if (!token) {
      ctx.status = 400;
      ctx.body = { message: 'Token requerido' };
      return;
    }

    const payload = verificarTokenActivacion(token);

    if (payload.type !== 'activation') {
      ctx.status = 400;
      ctx.body = { message: 'Token inválido' };
      return;
    }

    await authService.activarUsuario(payload.sub);

    ctx.status = 200;
    ctx.body = { message: 'Cuenta activada correctamente' };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { message: 'Token inválido o expirado' };
  }
};

/**
 * POST /auth/resend-activation
*/
export const resendActivation = async (ctx: Context) => {
  try {
    const dto: ResendActivationDTO =
      ResendActivationSchema.parse(ctx.request.body);

    const user = await authService.obtenerUsuarioPorEmail(dto.email);

    // Respuesta genérica SIEMPRE
    if (!user || user.activo) {
      ctx.status = 200;
      ctx.body = {
        message: 'Si el email existe, se ha enviado un correo de activación.',
      };
      return;
    }

    const token = generarTokenActivacion(user.idUsuario);
    const activationUrl = `${process.env.SPA_URL}/activate?token=${token}`;

    await enviarEmail({
      to: user.email,
      subject: 'Activa tu cuenta',
      html: activationEmailTemplate(activationUrl),
    });

    ctx.status = 200;
    ctx.body = {
      message: 'Si el email existe, se ha enviado un correo de activación.',
    };
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { message: error?.message || 'Error' };
  }
};

export const requestResetPassword = async (ctx: Context) => {
  try {
    const dto =
      RequestResetPasswordSchema.parse(ctx.request.body);

    const user = await authService.obtenerUsuarioPorEmail(dto.email);

    // Respuesta genérica SIEMPRE
    if (!user) {
      ctx.status = 200;
      ctx.body = {
        message: 'Si el email existe, se enviará un correo.',
      };
      return;
    }

    const token = generarTokenResetPassword(user.idUsuario);
    const resetUrl = `${process.env.SPA_URL}/reset-password?token=${token}`;

    await enviarEmail({
      to: user.email,
      subject: 'Reset de contraseña',
      html: `
        <p>Haz click para cambiar tu contraseña:</p>
        <a href="${resetUrl}">Cambiar contraseña</a>
        <p>Este enlace expira en 1 hora.</p>
      `,
    });

    ctx.status = 200;
    ctx.body = {
      message: 'Si el email existe, se enviará un correo.',
    };
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = { message: error?.message || 'Error' };
  }
};

export const resetPassword = async (ctx: Context) => {
  try {
    const dto = ResetPasswordSchema.parse(ctx.request.body);

    const payload = verificarActionToken(dto.token);

    if (payload.type !== 'reset-password') {
      ctx.status = 400;
      ctx.body = { message: 'Token inválido' };
      return;
    }

    await authService.resetearPassword(payload.sub, dto.passwordNueva);

    ctx.status = 200;
    ctx.body = {
      message: 'Contraseña actualizada correctamente',
    };
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      message: 'Token inválido o expirado',
    };
  }
};