import * as z from 'zod';

export const RolUsuarioSchema = z.enum(['ADMIN', 'OPERA', 'GRABA', 'REVISA'])

export type RolUsuario = z.infer<typeof RolUsuarioSchema>;