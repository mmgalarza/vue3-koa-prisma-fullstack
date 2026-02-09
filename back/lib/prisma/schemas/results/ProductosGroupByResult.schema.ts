import * as z from 'zod';
export const ProductosGroupByResultSchema = z.array(z.object({
  idProducto: z.number().int(),
  nombre: z.string(),
  idCategoria: z.number().int(),
  descripcion: z.string(),
  imagen: z.string(),
  codigo: z.string(),
  unidad: z.string(),
  activo: z.boolean(),
  _count: z.object({
    idProducto: z.number(),
    nombre: z.number(),
    idCategoria: z.number(),
    descripcion: z.number(),
    imagen: z.number(),
    codigo: z.number(),
    unidad: z.number(),
    activo: z.number(),
    categoria: z.number(),
    listasDet: z.number(),
    listaPvpDet: z.number(),
    ventaDet: z.number(),
    registroDet: z.number()
  }).optional(),
  _sum: z.object({
    idProducto: z.number().nullable(),
    idCategoria: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idProducto: z.number().nullable(),
    idCategoria: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idProducto: z.number().int().nullable(),
    nombre: z.string().nullable(),
    idCategoria: z.number().int().nullable(),
    descripcion: z.string().nullable(),
    imagen: z.string().nullable(),
    codigo: z.string().nullable(),
    unidad: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    idProducto: z.number().int().nullable(),
    nombre: z.string().nullable(),
    idCategoria: z.number().int().nullable(),
    descripcion: z.string().nullable(),
    imagen: z.string().nullable(),
    codigo: z.string().nullable(),
    unidad: z.string().nullable()
  }).nullable().optional()
}));