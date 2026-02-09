import * as z from 'zod';
export const UsuarioEmpresaFindManyResultSchema = z.object({
  data: z.array(z.object({
  idUsuarioEmpresa: z.number().int(),
  idUsuario: z.number().int(),
  idEmpresa: z.number().int(),
  usuario: z.unknown(),
  empresa: z.unknown(),
  rol: z.unknown()
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