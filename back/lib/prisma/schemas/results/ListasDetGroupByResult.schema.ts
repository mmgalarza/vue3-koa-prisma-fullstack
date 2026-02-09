import * as z from 'zod';
export const ListasDetGroupByResultSchema = z.array(z.object({
  idListaDet: z.number().int(),
  idLista: z.number().int(),
  idProducto: z.number().int(),
  precio: z.number(),
  descuento: z.number(),
  _count: z.object({
    idListaDet: z.number(),
    idLista: z.number(),
    idProducto: z.number(),
    precio: z.number(),
    descuento: z.number(),
    lista: z.number(),
    producto: z.number()
  }).optional(),
  _sum: z.object({
    idListaDet: z.number().nullable(),
    idLista: z.number().nullable(),
    idProducto: z.number().nullable(),
    precio: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    idListaDet: z.number().nullable(),
    idLista: z.number().nullable(),
    idProducto: z.number().nullable(),
    precio: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    idListaDet: z.number().int().nullable(),
    idLista: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    precio: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    idListaDet: z.number().int().nullable(),
    idLista: z.number().int().nullable(),
    idProducto: z.number().int().nullable(),
    precio: z.number().nullable(),
    descuento: z.number().nullable()
  }).nullable().optional()
}));