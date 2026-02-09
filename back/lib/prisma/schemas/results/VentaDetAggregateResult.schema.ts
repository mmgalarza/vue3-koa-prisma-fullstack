import * as z from 'zod';
export const VentaDetAggregateResultSchema = z.object({  _count: z.object({
    idVentaDet: z.number(),
    idVenta: z.number(),
    idProducto: z.number(),
    cantidad: z.number(),
    precioUnit: z.number(),
    descuento: z.number(),
    venta: z.number(),
    producto: z.number()
  }).optional(),
  _sum: z.object({
    idVentaDet: z.number().nullable(),
    idVenta: z.number().nullable(),
    idProducto: z.number().nullable(),
    cantidad: z.number().nullable(),
    precioUnit: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idVentaDet: z.number().nullable(),
    idVenta: z.number().nullable(),
    idProducto: z.number().nullable(),
    cantidad: z.number().nullable(),
    precioUnit: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idVentaDet: z.number().int().nullable(),
    idVenta: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    cantidad: z.number().nullable(),
    precioUnit: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    idVentaDet: z.number().int().nullable(),
    idVenta: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    cantidad: z.number().nullable(),
    precioUnit: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional()});