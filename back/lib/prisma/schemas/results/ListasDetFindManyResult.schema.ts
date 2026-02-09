import * as z from 'zod';
export const ListasDetFindManyResultSchema = z.object({
  data: z.array(z.object({
  idListaDet: z.number().int(),
  idLista: z.number().int(),
  idProducto: z.number().int(),
  precio: z.number(),
  descuento: z.number(),
  lista: z.unknown(),
  producto: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});