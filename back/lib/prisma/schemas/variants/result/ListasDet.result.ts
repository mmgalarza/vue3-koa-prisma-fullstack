import * as z from 'zod';
// prettier-ignore
export const ListasDetResultSchema = z.object({
    idListaDet: z.number().int(),
    idLista: z.number().int(),
    idProducto: z.number().int(),
    precio: z.number(),
    descuento: z.number(),
    lista: z.unknown(),
    producto: z.unknown()
}).strict();

export type ListasDetResultType = z.infer<typeof ListasDetResultSchema>;
