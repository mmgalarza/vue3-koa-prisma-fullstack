import * as z from 'zod';
// prettier-ignore
export const CategoriasModelSchema = z.object({
    idCategoria: z.number().int(),
    nombre: z.string(),
    descripcion: z.string().nullable(),
    icono: z.string().nullable(),
    activo: z.boolean(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    productos: z.array(z.unknown())
}).strict();

export type CategoriasPureType = z.infer<typeof CategoriasModelSchema>;
