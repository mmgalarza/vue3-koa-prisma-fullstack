import * as z from 'zod';
// prettier-ignore
export const ActividadModelSchema = z.object({
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

export type ActividadPureType = z.infer<typeof ActividadModelSchema>;
