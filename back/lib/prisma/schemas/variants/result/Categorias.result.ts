import * as z from 'zod';
// prettier-ignore
export const CategoriasResultSchema = z.object({
    idCategoria: z.number().int(),
    nombre: z.string(),
    descripcion: z.string().nullable(),
    icono: z.string().nullable(),
    activo: z.boolean(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    productos: z.array(z.unknown())
}).strict();

export type CategoriasResultType = z.infer<typeof CategoriasResultSchema>;
