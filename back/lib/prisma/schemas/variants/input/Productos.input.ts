import * as z from 'zod';
// prettier-ignore
export const ProductosInputSchema = z.object({
    idProducto: z.number().int(),
    nombre: z.string(),
    idCategoria: z.number().int(),
    descripcion: z.string().optional().nullable(),
    imagen: z.string().optional().nullable(),
    codigo: z.string().optional().nullable(),
    unidad: z.string().optional().nullable(),
    activo: z.boolean(),
    categoria: z.unknown(),
    listasDet: z.array(z.unknown()),
    listaPvpDet: z.array(z.unknown()),
    ventaDet: z.array(z.unknown()),
    registroDet: z.array(z.unknown())
}).strict();

export type ProductosInputType = z.infer<typeof ProductosInputSchema>;
