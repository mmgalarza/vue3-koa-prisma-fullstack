import * as z from 'zod';
export const CategoriasGroupByResultSchema = z.array(z.object({
  idCategoria: z.number().int(),
  nombre: z.string(),
  descripcion: z.string(),
  icono: z.string(),
  activo: z.boolean(),
  idEmpresa: z.number().int(),
  _count: z.object({
    idCategoria: z.number(),
    nombre: z.number(),
    descripcion: z.number(),
    icono: z.number(),
    activo: z.number(),
    idEmpresa: z.number(),
    empresa: z.number(),
    productos: z.number()
  }).optional(),
  _sum: z.object({
    idCategoria: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idCategoria: z.number().nullable(),
    idEmpresa: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idCategoria: z.number().int().nullable(),
    nombre: z.string().nullable(),
    descripcion: z.string().nullable(),
    icono: z.string().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    idCategoria: z.number().int().nullable(),
    nombre: z.string().nullable(),
    descripcion: z.string().nullable(),
    icono: z.string().nullable(),
    idEmpresa: z.number().int().nullable()
  }).nullable().optional()
}));