import * as z from 'zod';

export const EmpresasScalarFieldEnumSchema = z.enum(['idEmpresa', 'nombre', 'email', 'calle', 'numero', 'ciudad', 'provincia', 'codigoPostal', 'pais', 'contacto', 'activo'])

export type EmpresasScalarFieldEnum = z.infer<typeof EmpresasScalarFieldEnumSchema>;