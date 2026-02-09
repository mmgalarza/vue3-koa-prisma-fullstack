import * as z from 'zod';
// prettier-ignore
export const ListaPvpDetInputSchema = z.object({
    idListaPvpDet: z.number().int(),
    idListaPvp: z.number().int(),
    idProducto: z.number().int(),
    precioVenta: z.number(),
    listaPvp: z.unknown(),
    producto: z.unknown()
}).strict();

export type ListaPvpDetInputType = z.infer<typeof ListaPvpDetInputSchema>;
