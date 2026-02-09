import * as z from 'zod';

export const CategoriasScalarFieldEnumSchema = z.enum(['idCategoria', 'nombre', 'descripcion', 'icono', 'activo', 'idEmpresa'])

export type CategoriasScalarFieldEnum = z.infer<typeof CategoriasScalarFieldEnumSchema>;