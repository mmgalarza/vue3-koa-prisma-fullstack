import * as z from 'zod';
export const RegistroDetUpdateResultSchema = z.nullable(z.object({
  idRegistroDet: z.number().int(),
  idRegistro: z.number().int(),
  idProducto: z.number().int(),
  idAlmacen: z.number().int().optional(),
  flujoAlmacen: z.unknown(),
  cantidad: z.number(),
  registro: z.unknown(),
  producto: z.unknown(),
  almacen: z.unknown().optional()
}));