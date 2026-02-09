import * as z from 'zod';

export const VentaDetScalarFieldEnumSchema = z.enum(['idVentaDet', 'idVenta', 'idProducto', 'cantidad', 'precioUnit', 'descuento'])

export type VentaDetScalarFieldEnum = z.infer<typeof VentaDetScalarFieldEnumSchema>;