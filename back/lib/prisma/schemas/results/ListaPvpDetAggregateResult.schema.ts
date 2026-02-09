import * as z from 'zod';
export const ListaPvpDetAggregateResultSchema = z.object({  _count: z.object({
    idListaPvpDet: z.number(),
    idListaPvp: z.number(),
    idProducto: z.number(),
    precioVenta: z.number(),
    listaPvp: z.number(),
    producto: z.number()
  }).optional(),
  _sum: z.object({
    idListaPvpDet: z.number().nullable(),
    idListaPvp: z.number().nullable(),
    idProducto: z.number().nullable(),
    precioVenta: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idListaPvpDet: z.number().nullable(),
    idListaPvp: z.number().nullable(),
    idProducto: z.number().nullable(),
    precioVenta: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idListaPvpDet: z.number().int().nullable(),
    idListaPvp: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    precioVenta: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    idListaPvpDet: z.number().int().nullable(),
    idListaPvp: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    precioVenta: z.number().nullable()
  }).nullable().optional()});