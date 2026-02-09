import * as z from 'zod';
export const TiposDocAggregateResultSchema = z.object({  _count: z.object({
    idTipoDoc: z.number(),
    nombre: z.number(),
    movAlmacen: z.number(),
    idTalon: z.number(),
    talonario: z.number(),
    registros: z.number()
  }).optional(),
  _sum: z.object({
    idTalon: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idTalon: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idTipoDoc: z.string().nullable(),
    nombre: z.string().nullable(),
    idTalon: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idTipoDoc: z.string().nullable(),
    nombre: z.string().nullable(),
    idTalon: z.number().int().nullable()
  }).nullable().optional()});