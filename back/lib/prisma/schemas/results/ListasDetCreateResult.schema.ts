import * as z from 'zod';
export const ListasDetCreateResultSchema = z.object({
  idListaDet: z.number().int(),
  idLista: z.number().int(),
  idProducto: z.number().int(),
  precio: z.number(),
  descuento: z.number(),
  lista: z.unknown(),
  producto: z.unknown()
});