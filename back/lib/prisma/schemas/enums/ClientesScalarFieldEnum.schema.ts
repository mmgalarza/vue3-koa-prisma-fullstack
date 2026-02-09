import * as z from 'zod';

export const ClientesScalarFieldEnumSchema = z.enum(['idCliente', 'nombre', 'email', 'calle', 'numero', 'ciudad', 'provincia', 'codigoPostal', 'pais', 'contacto', 'activo', 'idEmpresa'])

export type ClientesScalarFieldEnum = z.infer<typeof ClientesScalarFieldEnumSchema>;