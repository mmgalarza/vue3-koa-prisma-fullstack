import * as z from 'zod';
// prettier-ignore
export const FacturaResultSchema = z.object({
    idVenta: z.number().int(),
    cae: z.string().nullable(),
    vencCae: z.date().nullable(),
    neto: z.number(),
    iva: z.number(),
    total: z.number(),
    venta: z.unknown()
}).strict();

export type FacturaResultType = z.infer<typeof FacturaResultSchema>;
