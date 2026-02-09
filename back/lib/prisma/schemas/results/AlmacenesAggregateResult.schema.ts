import * as z from 'zod';
export const AlmacenesAggregateResultSchema = z.object({  _count: z.object({
    idAlmacen: z.number(),
    nombre: z.number(),
    interno: z.number(),
    calle: z.number(),
    numero: z.number(),
    ciudad: z.number(),
    provincia: z.number(),
    codigoPostal: z.number(),
    pais: z.number(),
    responsable: z.number(),
    activo: z.number(),
    idEmpresa: z.number(),
    empresa: z.number(),
    registrosDet: z.number()
  }).optional(),
  _sum: z.object({
    idAlmacen: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idAlmacen: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idAlmacen: z.number().int().nullable(),
    nombre: z.string().nullable(),
    calle: z.string().nullable(),
    numero: z.string().nullable(),
    ciudad: z.string().nullable(),
    provincia: z.string().nullable(),
    codigoPostal: z.string().nullable(),
    pais: z.string().nullable(),
    responsable: z.string().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idAlmacen: z.number().int().nullable(),
    nombre: z.string().nullable(),
    calle: z.string().nullable(),
    numero: z.string().nullable(),
    ciudad: z.string().nullable(),
    provincia: z.string().nullable(),
    codigoPostal: z.string().nullable(),
    pais: z.string().nullable(),
    responsable: z.string().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional()});