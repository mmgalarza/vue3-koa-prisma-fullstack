import * as z from 'zod';
export const CategoriasFindManyResultSchema = z.object({
  data: z.array(z.object({
  idCategoria: z.number().int(),
  nombre: z.string(),
  descripcion: z.string().optional(),
  icono: z.string().optional(),
  activo: z.boolean(),
  idEmpresa: z.number().int(),
  empresa: z.unknown(),
  productos: z.array(z.unknown())
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