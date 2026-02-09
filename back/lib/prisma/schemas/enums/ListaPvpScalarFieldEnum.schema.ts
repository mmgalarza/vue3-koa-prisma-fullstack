import * as z from 'zod';

export const ListaPvpScalarFieldEnumSchema = z.enum(['idListaPvp', 'nombre', 'criterio', 'fechaGen', 'idEmpresa'])

export type ListaPvpScalarFieldEnum = z.infer<typeof ListaPvpScalarFieldEnumSchema>;