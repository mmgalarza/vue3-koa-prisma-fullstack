import * as z from 'zod';

export const AlmacenesScalarFieldEnumSchema = z.enum(['idAlmacen', 'nombre', 'interno', 'calle', 'numero', 'ciudad', 'provincia', 'codigoPostal', 'pais', 'responsable', 'activo', 'idEmpresa'])

export type AlmacenesScalarFieldEnum = z.infer<typeof AlmacenesScalarFieldEnumSchema>;