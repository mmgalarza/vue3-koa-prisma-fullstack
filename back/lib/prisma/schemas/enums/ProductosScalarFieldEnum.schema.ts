import * as z from 'zod';

export const ProductosScalarFieldEnumSchema = z.enum(['idProducto', 'nombre', 'idCategoria', 'descripcion', 'imagen', 'codigo', 'unidad', 'activo'])

export type ProductosScalarFieldEnum = z.infer<typeof ProductosScalarFieldEnumSchema>;