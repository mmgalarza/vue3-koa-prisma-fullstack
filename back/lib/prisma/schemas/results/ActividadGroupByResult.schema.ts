import * as z from 'zod';
export const ActividadGroupByResultSchema = z.array(z.object({
  idActividad: z.number().int(),
  idEmpresa: z.number().int(),
  nombre: z.string(),
  inicio: z.date(),
  fin: z.date(),
  estado: z.string(),
  activa: z.boolean(),
  _count: z.object({
    idActividad: z.number(),
    idEmpresa: z.number(),
    nombre: z.number(),
    inicio: z.number(),
    fin: z.number(),
    estado: z.number(),
    activa: z.number(),
    empresa: z.number(),
    registros: z.number()
  }).optional(),
  _sum: z.object({
    idActividad: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idActividad: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idActividad: z.number().int().nullable(),
    idEmpresa: z.number().int().nullable(),
    nombre: z.string().nullable(),
    inicio: z.date().nullable(),
    fin: z.date().nullable(),
    estado: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    idActividad: z.number().int().nullable(),
    idEmpresa: z.number().int().nullable(),
    nombre: z.string().nullable(),
    inicio: z.date().nullable(),
    fin: z.date().nullable(),
    estado: z.string().nullable()
  }).nullable().optional()
}));