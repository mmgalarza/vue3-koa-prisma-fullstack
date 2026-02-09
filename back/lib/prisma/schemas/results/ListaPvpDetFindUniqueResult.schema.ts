import * as z from 'zod';
export const ListaPvpDetFindUniqueResultSchema = z.nullable(z.object({
  idListaPvpDet: z.number().int(),
  idListaPvp: z.number().int(),
  idProducto: z.number().int(),
  precioVenta: z.number(),
  listaPvp: z.unknown(),
  producto: z.unknown()
}));