import * as z from 'zod';
export const ListaPvpFindManyResultSchema = z.object({
  data: z.array(z.object({
  idListaPvp: z.number().int(),
  nombre: z.string(),
  criterio: z.unknown(),
  fechaGen: z.date(),
  idEmpresa: z.number().int(),
  empresa: z.unknown(),
  detalles: z.array(z.unknown()),
  ventas: z.array(z.unknown())
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