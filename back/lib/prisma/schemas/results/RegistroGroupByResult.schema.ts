import * as z from 'zod';
export const RegistroGroupByResultSchema = z.array(z.object({
  idRegistro: z.number().int(),
  fecha: z.date(),
  numero: z.string(),
  idTipoDoc: z.string(),
  idVenta: z.number().int(),
  idActividad: z.number().int(),
  _count: z.object({
    idRegistro: z.number(),
    fecha: z.number(),
    numero: z.number(),
    idTipoDoc: z.number(),
    idVenta: z.number(),
    idActividad: z.number(),
    tipoDoc: z.number(),
    venta: z.number(),
    actividad: z.number(),
    detalles: z.number()
  }).optional(),
  _sum: z.object({
    idRegistro: z.number().nullable(),
    idVenta: z.number().nullable(),
    idActividad: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idRegistro: z.number().nullable(),
    idVenta: z.number().nullable(),
    idActividad: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idRegistro: z.number().int().nullable(),
    fecha: z.date().nullable(),
    numero: z.string().nullable(),
    idTipoDoc: z.string().nullable(),
    idVenta: z.number().int().nullable(),
    idActividad: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idRegistro: z.number().int().nullable(),
    fecha: z.date().nullable(),
    numero: z.string().nullable(),
    idTipoDoc: z.string().nullable(),
    idVenta: z.number().int().nullable(),
    idActividad: z.number().int().nullable()
  }).nullable().optional()
}));