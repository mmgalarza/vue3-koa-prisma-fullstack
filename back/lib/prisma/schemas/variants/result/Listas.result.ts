import * as z from 'zod';
// prettier-ignore
export const ListasResultSchema = z.object({
    idLista: z.number().int(),
    idProveedor: z.number().int(),
    refNo: z.string(),
    fecha: z.date(),
    observacion: z.string().nullable(),
    proveedor: z.unknown(),
    detalles: z.array(z.unknown())
}).strict();

export type ListasResultType = z.infer<typeof ListasResultSchema>;
