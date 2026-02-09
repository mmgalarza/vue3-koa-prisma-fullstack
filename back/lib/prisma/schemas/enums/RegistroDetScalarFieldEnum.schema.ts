import * as z from 'zod';

export const RegistroDetScalarFieldEnumSchema = z.enum(['idRegistroDet', 'idRegistro', 'idProducto', 'idAlmacen', 'flujoAlmacen', 'cantidad'])

export type RegistroDetScalarFieldEnum = z.infer<typeof RegistroDetScalarFieldEnumSchema>;