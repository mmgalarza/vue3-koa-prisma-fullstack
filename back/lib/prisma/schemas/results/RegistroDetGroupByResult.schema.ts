import * as z from 'zod';
export const RegistroDetGroupByResultSchema = z.array(z.object({
  idRegistroDet: z.number().int(),
  idRegistro: z.number().int(),
  idProducto: z.number().int(),
  idAlmacen: z.number().int(),
  cantidad: z.number(),
  _count: z.object({
    idRegistroDet: z.number(),
    idRegistro: z.number(),
    idProducto: z.number(),
    idAlmacen: z.number(),
    flujoAlmacen: z.number(),
    cantidad: z.number(),
    registro: z.number(),
    producto: z.number(),
    almacen: z.number()
  }).optional(),
  _sum: z.object({
    idRegistroDet: z.number().nullable(),
    idRegistro: z.number().nullable(),
    idProducto: z.number().nullable(),
    idAlmacen: z.number().nullable(),
    cantidad: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idRegistroDet: z.number().nullable(),
    idRegistro: z.number().nullable(),
    idProducto: z.number().nullable(),
    idAlmacen: z.number().nullable(),
    cantidad: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idRegistroDet: z.number().int().nullable(),
    idRegistro: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    idAlmacen: z.number().int().nullable(),
    cantidad: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    idRegistroDet: z.number().int().nullable(),
    idRegistro: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    idAlmacen: z.number().int().nullable(),
    cantidad: z.number().nullable()
  }).nullable().optional()
}));