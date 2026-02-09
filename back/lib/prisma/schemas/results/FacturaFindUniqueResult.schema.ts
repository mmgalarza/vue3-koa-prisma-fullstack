import * as z from 'zod';
export const FacturaFindUniqueResultSchema = z.nullable(z.object({
  idVenta: z.number().int(),
  cae: z.string().optional(),
  vencCae: z.date().optional(),
  neto: z.number(),
  iva: z.number(),
  total: z.number(),
  venta: z.unknown()
}));