import { z } from "zod";
/* AUTH */

/**
 * LOGIN
 * ------------------
 * Usado en: POST /auth/login
 */
export const LoginSchema = z.object({
  email: z
    .string()
    .email("Email inválido")
    .transform(v => v.toLowerCase().trim()),

  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginDTO = z.infer<typeof LoginSchema>;

/**
 * REGISTRO
 * ------------------
 * Usado en: POST /auth/register
 * Registro público / inicial
 */
export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(50),

  email: z
    .string()
    .email()
    .transform(v => v.toLowerCase().trim()),

  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres"),

  nombre: z
    .string()
    .min(2)
    .max(80),
});

export type RegisterDTO = z.infer<typeof RegisterSchema>;

/**
 * CAMBIO DE PASSWORD (usuario autenticado)
 * ------------------
 * POST /auth/change-password
 */
export const ChangePasswordSchema = z.object({
  passwordActual: z
    .string()
    .min(6),

  passwordNueva: z
    .string()
    .min(8),
});

export type ChangePasswordDTO = z.infer<typeof ChangePasswordSchema>;

/**
 * RESET DE PASSWORD (token/email)
 * ------------------
 * POST /auth/reset-password
 */
export const ResetPasswordSchema = z.object({
  token: z.string().min(20),
  passwordNueva: z.string().min(8),
});

export type ResetPasswordDTO = z.infer<typeof ResetPasswordSchema>;

/**
 * RESEND ACTIVATION
 * ------------------
 * POST /auth/resend-activation
 */
export const ResendActivationSchema = z.object({
  email: z
    .string()
    .email()
    .transform(v => v.toLowerCase().trim()),
});

export type ResendActivationDTO = z.infer<typeof ResendActivationSchema>;

/**
 * REQUEST RESET PASSWORD
 * ------------------
 * POST /auth/reset-password/request
 */
export const RequestResetPasswordSchema = z.object({
  email: z
    .string()
    .email()
    .transform(v => v.toLowerCase().trim()),
});

export type RequestResetPasswordDTO =
  z.infer<typeof RequestResetPasswordSchema>;
