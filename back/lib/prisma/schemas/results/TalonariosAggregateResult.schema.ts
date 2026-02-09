import * as z from 'zod';
export const TalonariosAggregateResultSchema = z.object({  _count: z.object({
    idTalon: z.number(),
    nombre: z.number(),
    inicio: z.number(),
    fin: z.number(),
    actual: z.number(),
    tiposDoc: z.number()
  }).optional(),
  _sum: z.object({
    idTalon: z.number().nullable(),
    inicio: z.number().nullable(),
    fin: z.number().nullable(),
    actual: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idTalon: z.number().nullable(),
    inicio: z.number().nullable(),
    fin: z.number().nullable(),
    actual: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idTalon: z.number().int().nullable(),
    nombre: z.string().nullable(),
    inicio: z.number().int().nullable(),
    fin: z.number().int().nullable(),
    actual: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idTalon: z.number().int().nullable(),
    nombre: z.string().nullable(),
    inicio: z.number().int().nullable(),
    fin: z.number().int().nullable(),
    actual: z.number().int().nullable()
  }).nullable().optional()});