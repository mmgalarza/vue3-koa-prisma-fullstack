import * as z from 'zod';
export const VentaDetFindManyResultSchema = z.object({
  data: z.array(z.object({
  idVentaDet: z.number().int(),
  idVenta: z.number().int(),
  idProducto: z.number().int(),
  cantidad: z.number(),
  precioUnit: z.number(),
  descuento: z.number(),
  venta: z.unknown(),
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