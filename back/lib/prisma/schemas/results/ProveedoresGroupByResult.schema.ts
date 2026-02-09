import * as z from 'zod';
export const ProveedoresGroupByResultSchema = z.array(z.object({
  idProveedor: z.number().int(),
  nombre: z.string(),
  email: z.string(),
  calle: z.string(),
  numero: z.string(),
  ciudad: z.string(),
  provincia: z.string(),
  codigoPostal: z.string(),
  pais: z.string(),
  contacto: z.string(),
  activo: z.boolean(),
  idEmpresa: z.number().int(),
  _count: z.object({
    idProveedor: z.number(),
    nombre: z.number(),
    email: z.number(),
    calle: z.number(),
    numero: z.number(),
    ciudad: z.number(),
    provincia: z.number(),
    codigoPostal: z.number(),
    pais: z.number(),
    contacto: z.number(),
    activo: z.number(),
    idEmpresa: z.number(),
    empresa: z.number(),
    listas: z.number()
  }).optional(),
  _sum: z.object({
    idProveedor: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idProveedor: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idProveedor: z.number().int().nullable(),
    nombre: z.string().nullable(),
    email: z.string().nullable(),
    calle: z.string().nullable(),
    numero: z.string().nullable(),
    ciudad: z.string().nullable(),
    provincia: z.string().nullable(),
    codigoPostal: z.string().nullable(),
    pais: z.string().nullable(),
    contacto: z.string().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idProveedor: z.number().int().nullable(),
    nombre: z.string().nullable(),
    email: z.string().nullable(),
    calle: z.string().nullable(),
    numero: z.string().nullable(),
    ciudad: z.string().nullable(),
    provincia: z.string().nullable(),
    codigoPostal: z.string().nullable(),
    pais: z.string().nullable(),
    contacto: z.string().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional()
}));