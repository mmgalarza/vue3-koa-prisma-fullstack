import * as z from 'zod';

export const UsuariosScalarFieldEnumSchema = z.enum(['idUsuario', 'username', 'email', 'password', 'nombre', 'activo', 'creadoEn', 'actualizadoEn'])

export type UsuariosScalarFieldEnum = z.infer<typeof UsuariosScalarFieldEnumSchema>;