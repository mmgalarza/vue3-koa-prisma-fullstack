import * as z from 'zod';
// prettier-ignore
export const ProductosResultSchema = z.object({
    idProducto: z.number().int(),
    nombre: z.string(),
    idCategoria: z.number().int(),
    descripcion: z.string().nullable(),
    imagen: z.string().nullable(),
    codigo: z.string().nullable(),
    unidad: z.string().nullable(),
    activo: z.boolean(),
    categoria: z.unknown(),
    listasDet: z.array(z.unknown()),
    listaPvpDet: z.array(z.unknown()),
    ventaDet: z.array(z.unknown()),
    registroDet: z.array(z.unknown())
}).strict();

export type ProductosResultType = z.infer<typeof ProductosResultSchema>;
