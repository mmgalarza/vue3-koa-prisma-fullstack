import * as z from 'zod';
// prettier-ignore
export const ClientesInputSchema = z.object({
    idCliente: z.number().int(),
    nombre: z.string(),
    email: z.string().optional().nullable(),
    calle: z.string(),
    numero: z.string().optional().nullable(),
    ciudad: z.string(),
    provincia: z.string(),
    codigoPostal: z.string(),
    pais: z.string(),
    contacto: z.string().optional().nullable(),
    activo: z.boolean(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    ventas: z.array(z.unknown())
}).strict();

export type ClientesInputType = z.infer<typeof ClientesInputSchema>;
