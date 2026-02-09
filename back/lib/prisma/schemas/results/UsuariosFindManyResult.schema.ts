import * as z from 'zod';
export const UsuariosFindManyResultSchema = z.object({
  data: z.array(z.object({
  idUsuario: z.number().int(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  nombre: z.string(),
  activo: z.boolean(),
  creadoEn: z.date(),
  actualizadoEn: z.date(),
  UsuarioEmpresas: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});