import * as z from 'zod';
export const ListasDetAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});