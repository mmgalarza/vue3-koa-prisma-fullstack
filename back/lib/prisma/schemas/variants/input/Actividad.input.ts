import * as z from 'zod';
// prettier-ignore
export const ActividadInputSchema = z.object({
    idActividad: z.number().int(),
    idEmpresa: z.number().int(),
    nombre: z.string(),
    inicio: z.date(),
    fin: z.date(),
    estado: z.string(),
    activa: z.boolean(),
    empresa: z.unknown(),
    registros: z.array(z.unknown())
}).strict();

export type ActividadInputType = z.infer<typeof ActividadInputSchema>;
