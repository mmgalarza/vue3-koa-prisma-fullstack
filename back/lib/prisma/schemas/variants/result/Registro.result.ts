import * as z from 'zod';
// prettier-ignore
export const RegistroResultSchema = z.object({
    idRegistro: z.number().int(),
    fecha: z.date(),
    numero: z.string(),
    idTipoDoc: z.string(),
    idVenta: z.number().int().nullable(),
    idActividad: z.number().int().nullable(),
    tipoDoc: z.unknown(),
    venta: z.unknown().nullable(),
    actividad: z.unknown().nullable(),
    detalles: z.array(z.unknown())
}).strict();

export type RegistroResultType = z.infer<typeof RegistroResultSchema>;
