import * as z from 'zod';
export const ListaPvpGroupByResultSchema = z.array(z.object({
  idListaPvp: z.number().int(),
  nombre: z.string(),
  fechaGen: z.date(),
  idEmpresa: z.number().int(),
  _count: z.object({
    idListaPvp: z.number(),
    nombre: z.number(),
    criterio: z.number(),
    fechaGen: z.number(),
    idEmpresa: z.number(),
    empresa: z.number(),
    detalles: z.number(),
    ventas: z.number()
  }).optional(),
  _sum: z.object({
    idListaPvp: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idListaPvp: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idListaPvp: z.number().int().nullable(),
    nombre: z.string().nullable(),
    fechaGen: z.date().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idListaPvp: z.number().int().nullable(),
    nombre: z.string().nullable(),
    fechaGen: z.date().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional()
}));