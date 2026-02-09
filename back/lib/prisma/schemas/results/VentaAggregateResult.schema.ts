import * as z from 'zod';
export const VentaAggregateResultSchema = z.object({  _count: z.object({
    idVenta: z.number(),
    fecha: z.number(),
    estado: z.number(),
    idEmpresa: z.number(),
    idCliente: z.number(),
    idListaPvp: z.number(),
    empresa: z.number(),
    cliente: z.number(),
    listaPvp: z.number(),
    detalles: z.number(),
    factura: z.number(),
    registros: z.number()
  }).optional(),
  _sum: z.object({
    idVenta: z.number().nullable(),
    idEmpresa: z.number().nullable(),
    idCliente: z.number().nullable(),
    idListaPvp: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idVenta: z.number().nullable(),
    idEmpresa: z.number().nullable(),
    idCliente: z.number().nullable(),
    idListaPvp: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idVenta: z.number().int().nullable(),
    fecha: z.date().nullable(),
    estado: z.string().nullable(),
    idEmpresa: z.number().int().nullable(),
    idCliente: z.number().int().nullable(),
    idListaPvp: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idVenta: z.number().int().nullable(),
    fecha: z.date().nullable(),
    estado: z.string().nullable(),
    idEmpresa: z.number().int().nullable(),
    idCliente: z.number().int().nullable(),
    idListaPvp: z.number().int().nullable()
  }).nullable().optional()});