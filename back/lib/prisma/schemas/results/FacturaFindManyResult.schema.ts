import * as z from 'zod';
export const FacturaFindManyResultSchema = z.object({
  data: z.array(z.object({
  idVenta: z.number().int(),
  cae: z.string().optional(),
  vencCae: z.date().optional(),
  neto: z.number(),
  iva: z.number(),
  total: z.number(),
  venta: z.unknown()
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