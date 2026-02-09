import * as z from 'zod';
// prettier-ignore
export const ListasModelSchema = z.object({
    idLista: z.number().int(),
    idProveedor: z.number().int(),
    refNo: z.string(),
    fecha: z.date(),
    observacion: z.string().nullable(),
    proveedor: z.unknown(),
    detalles: z.array(z.unknown())
}).strict();

export type ListasPureType = z.infer<typeof ListasModelSchema>;
