import * as z from 'zod';

export const UsuarioEmpresaScalarFieldEnumSchema = z.enum(['idUsuarioEmpresa', 'idUsuario', 'idEmpresa', 'rol'])

export type UsuarioEmpresaScalarFieldEnum = z.infer<typeof UsuarioEmpresaScalarFieldEnumSchema>;