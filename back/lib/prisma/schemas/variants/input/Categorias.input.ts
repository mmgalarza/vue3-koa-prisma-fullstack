import * as z from 'zod';
// prettier-ignore
export const CategoriasInputSchema = z.object({
    idCategoria: z.number().int(),
    nombre: z.string(),
    descripcion: z.string().optional().nullable(),
    icono: z.string().optional().nullable(),
    activo: z.boolean(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    productos: z.array(z.unknown())
}).strict();

export type CategoriasInputType = z.infer<typeof CategoriasInputSchema>;
