import * as z from 'zod';

export const ListaPvpDetScalarFieldEnumSchema = z.enum(['idListaPvpDet', 'idListaPvp', 'idProducto', 'precioVenta'])

export type ListaPvpDetScalarFieldEnum = z.infer<typeof ListaPvpDetScalarFieldEnumSchema>;