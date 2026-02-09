import * as z from 'zod';
// prettier-ignore
export const AlmacenesModelSchema = z.object({
    idAlmacen: z.number().int(),
    nombre: z.string(),
    interno: z.boolean(),
    calle: z.string(),
    numero: z.string().nullable(),
    ciudad: z.string(),
    provincia: z.string(),
    codigoPostal: z.string(),
    pais: z.string(),
    responsable: z.string().nullable(),
    activo: z.boolean(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    registrosDet: z.array(z.unknown())
}).strict();

export type AlmacenesPureType = z.infer<typeof AlmacenesModelSchema>;
