import * as z from 'zod';
export const ActividadFindManyResultSchema = z.object({
  data: z.array(z.object({
  idActividad: z.number().int(),
  idEmpresa: z.number().int(),
  nombre: z.string(),
  inicio: z.date(),
  fin: z.date(),
  estado: z.string(),
  activa: z.boolean(),
  empresa: z.unknown(),
  registros: z.array(z.unknown())
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