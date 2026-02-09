import jwt, { SignOptions, Secret } from 'jsonwebtoken';

const SECRET: Secret = process.env.JWT_SECRET || 'secret';

export const generarToken = (
  payload: Record<string, any>,
  expiresInSeconds: number = 3600 // 1 hora
): string => {
  const options: SignOptions = { expiresIn: expiresInSeconds };
  return jwt.sign(payload, SECRET, options);
};
export const verificarToken = (token: string) => {
  return jwt.verify(token, SECRET);
};

const ACTIVATION_SECRET: Secret =
  process.env.ACTIVATION_JWT_SECRET || 'activation_secret';

  /**
 * =========================
 * ACTIVACIÓN DE CUENTA
 * =========================
 */

// TIPOS DE TOKENS DE ACTIVACION
//
export type TokenPurpose =
  | 'activation'
  | 'reset-password';

/**
 * Payload común para tokens de acción
 */
export interface ActionTokenPayload {
  sub: number;
  type: TokenPurpose;
  iat: number;
  exp: number;
}

export const generarTokenActivacion = (
  userId: number,
  expiresInSeconds: number = 60 * 60 * 24 // 24h
): string => {
  const payload = {
    sub: userId,
    type: 'activation',
  };

  const options: SignOptions = { expiresIn: expiresInSeconds };

  return jwt.sign(payload, ACTIVATION_SECRET, options);
};

/**
 * Verifica token de activación
 */
export const verificarTokenActivacion = (token: string): {
  sub: number;
  type: 'activation';
  iat: number;
  exp: number;
} => {
  return jwt.verify(token, ACTIVATION_SECRET) as any;
};

export const generarTokenResetPassword = (
  userId: number,
  expiresInSeconds: number = 60 * 60 // 1h
): string => {
  return jwt.sign(
    { sub: userId, type: 'reset-password' },
    ACTIVATION_SECRET,
    { expiresIn: expiresInSeconds }
  );
};

export const verificarActionToken = (
  token: string
): ActionTokenPayload => {
  return jwt.verify(token, ACTIVATION_SECRET) as unknown as ActionTokenPayload;
};