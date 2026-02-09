import * as z from 'zod';
export const TalonariosFindManyResultSchema = z.object({
  data: z.array(z.object({
  idTalon: z.number().int(),
  nombre: z.string(),
  inicio: z.number().int(),
  fin: z.number().int(),
  actual: z.number().int(),
  tiposDoc: z.array(z.unknown())
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