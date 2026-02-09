import * as z from 'zod';
// prettier-ignore
export const FacturaInputSchema = z.object({
    idVenta: z.number().int(),
    cae: z.string().optional().nullable(),
    vencCae: z.date().optional().nullable(),
    neto: z.number(),
    iva: z.number(),
    total: z.number(),
    venta: z.unknown()
}).strict();

export type FacturaInputType = z.infer<typeof FacturaInputSchema>;
