import * as z from 'zod';
export const ListaPvpDetFindManyResultSchema = z.object({
  data: z.array(z.object({
  idListaPvpDet: z.number().int(),
  idListaPvp: z.number().int(),
  idProducto: z.number().int(),
  precioVenta: z.number(),
  listaPvp: z.unknown(),
  producto: z.unknown()
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