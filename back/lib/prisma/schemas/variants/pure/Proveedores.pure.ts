import * as z from 'zod';
// prettier-ignore
export const ProveedoresModelSchema = z.object({
    idProveedor: z.number().int(),
    nombre: z.string(),
    email: z.string().nullable(),
    calle: z.string(),
    numero: z.string().nullable(),
    ciudad: z.string(),
    provincia: z.string(),
    codigoPostal: z.string(),
    pais: z.string(),
    contacto: z.string().nullable(),
    activo: z.boolean(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    listas: z.array(z.unknown())
}).strict();

export type ProveedoresPureType = z.infer<typeof ProveedoresModelSchema>;
