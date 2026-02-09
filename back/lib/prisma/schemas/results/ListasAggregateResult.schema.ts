import * as z from 'zod';
export const ListasAggregateResultSchema = z.object({  _count: z.object({
    idLista: z.number(),
    idProveedor: z.number(),
    refNo: z.number(),
    fecha: z.number(),
    observacion: z.number(),
    proveedor: z.number(),
    detalles: z.number()
  }).optional(),
  _sum: z.object({
    idLista: z.number().nullable(),
    idProveedor: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idLista: z.number().nullable(),
    idProveedor: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idLista: z.number().int().nullable(),
    idProveedor: z.number().int().nullable(),
    refNo: z.string().nullable(),
    fecha: z.date().nullable(),
    observacion: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    idLista: z.number().int().nullable(),
    idProveedor: z.number().int().nullable(),
    refNo: z.string().nullable(),
    fecha: z.date().nullable(),
    observacion: z.string().nullable()
  }).nullable().optional()});