import * as z from 'zod';

export const ListasScalarFieldEnumSchema = z.enum(['idLista', 'idProveedor', 'refNo', 'fecha', 'observacion'])

export type ListasScalarFieldEnum = z.infer<typeof ListasScalarFieldEnumSchema>;