import * as z from 'zod';
// prettier-ignore
export const VentaDetModelSchema = z.object({
    idVentaDet: z.number().int(),
    idVenta: z.number().int(),
    idProducto: z.number().int(),
    cantidad: z.number(),
    precioUnit: z.number(),
    descuento: z.number(),
    venta: z.unknown(),
    producto: z.unknown()
}).strict();

export type VentaDetPureType = z.infer<typeof VentaDetModelSchema>;
