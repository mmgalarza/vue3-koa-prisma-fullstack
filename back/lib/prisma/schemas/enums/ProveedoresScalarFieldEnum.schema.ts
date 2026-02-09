import * as z from 'zod';

export const ProveedoresScalarFieldEnumSchema = z.enum(['idProveedor', 'nombre', 'email', 'calle', 'numero', 'ciudad', 'provincia', 'codigoPostal', 'pais', 'contacto', 'activo', 'idEmpresa'])

export type ProveedoresScalarFieldEnum = z.infer<typeof ProveedoresScalarFieldEnumSchema>;