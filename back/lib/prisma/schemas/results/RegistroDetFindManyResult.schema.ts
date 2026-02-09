import * as z from 'zod';
export const RegistroDetFindManyResultSchema = z.object({
  data: z.array(z.object({
  idRegistroDet: z.number().int(),
  idRegistro: z.number().int(),
  idProducto: z.number().int(),
  idAlmacen: z.number().int().optional(),
  flujoAlmacen: z.unknown(),
  cantidad: z.number(),
  registro: z.unknown(),
  producto: z.unknown(),
  almacen: z.unknown().optional()
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