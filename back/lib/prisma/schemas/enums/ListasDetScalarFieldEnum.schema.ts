import * as z from 'zod';

export const ListasDetScalarFieldEnumSchema = z.enum(['idListaDet', 'idLista', 'idProducto', 'precio', 'descuento'])

export type ListasDetScalarFieldEnum = z.infer<typeof ListasDetScalarFieldEnumSchema>;