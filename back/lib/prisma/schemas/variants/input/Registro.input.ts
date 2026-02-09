import * as z from 'zod';
// prettier-ignore
export const RegistroInputSchema = z.object({
    idRegistro: z.number().int(),
    fecha: z.date(),
    numero: z.string(),
    idTipoDoc: z.string(),
    idVenta: z.number().int().optional().nullable(),
    idActividad: z.number().int().optional().nullable(),
    tipoDoc: z.unknown(),
    venta: z.unknown().optional().nullable(),
    actividad: z.unknown().optional().nullable(),
    detalles: z.array(z.unknown())
}).strict();

export type RegistroInputType = z.infer<typeof RegistroInputSchema>;
