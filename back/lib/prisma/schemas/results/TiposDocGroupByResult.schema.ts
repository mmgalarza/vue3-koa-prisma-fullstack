import * as z from 'zod';
export const TiposDocGroupByResultSchema = z.array(z.object({
  idTipoDoc: z.string(),
  nombre: z.string(),
  idTalon: z.number().int(),
  _count: z.object({
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
  }).nullable().optional()
}));