import * as z from 'zod';
// prettier-ignore
export const VentaDetInputSchema = z.object({
    idVentaDet: z.number().int(),
    idVenta: z.number().int(),
    idProducto: z.number().int(),
    cantidad: z.number(),
    precioUnit: z.number(),
    descuento: z.number(),
    venta: z.unknown(),
    producto: z.unknown()
}).strict();

export type VentaDetInputType = z.infer<typeof VentaDetInputSchema>;
