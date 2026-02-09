import * as z from 'zod';
export const UsuariosFindUniqueResultSchema = z.nullable(z.object({
  idUsuario: z.number().int(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nombre: z.string(),
  activo: z.boolean(),
  creadoEn: z.date(),
  actualizadoEn: z.date(),
  UsuarioEmpresas: z.array(z.unknown())
}));