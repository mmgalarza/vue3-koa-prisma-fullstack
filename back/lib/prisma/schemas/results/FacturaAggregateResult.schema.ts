import * as z from 'zod';
export const FacturaAggregateResultSchema = z.object({  _count: z.object({
    idVenta: z.number(),
    cae: z.number(),
    vencCae: z.number(),
    neto: z.number(),
    iva: z.number(),
    total: z.number(),
    venta: z.number()
  }).optional(),
  _sum: z.object({
    idVenta: z.number().nullable(),
    neto: z.number().nullable(),
    iva: z.number().nullable(),
    total: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idVenta: z.number().nullable(),
    neto: z.number().nullable(),
    iva: z.number().nullable(),
    total: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idVenta: z.number().int().nullable(),
    cae: z.string().nullable(),
    vencCae: z.date().nullable(),
    neto: z.number().nullable(),
    iva: z.number().nullable(),
    total: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    idVenta: z.number().int().nullable(),
    cae: z.string().nullable(),
    vencCae: z.date().nullable(),
    neto: z.number().nullable(),
    iva: z.number().nullable(),
    total: z.number().nullable()
  }).nullable().optional()});