import * as z from 'zod';
// prettier-ignore
export const ListasInputSchema = z.object({
    idLista: z.number().int(),
    idProveedor: z.number().int(),
    refNo: z.string(),
    fecha: z.date(),
    observacion: z.string().optional().nullable(),
    proveedor: z.unknown(),
    detalles: z.array(z.unknown())
}).strict();

export type ListasInputType = z.infer<typeof ListasInputSchema>;
