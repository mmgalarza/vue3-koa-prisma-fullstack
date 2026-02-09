import * as z from 'zod';
export const VentaDetFindFirstResultSchema = z.nullable(z.object({
  idVentaDet: z.number().int(),
  idVenta: z.number().int(),
  idProducto: z.number().int(),
  cantidad: z.number(),
  precioUnit: z.number(),
  descuento: z.number(),
  venta: z.unknown(),
  producto: z.unknown()
}));