import * as z from 'zod';

export const VentaScalarFieldEnumSchema = z.enum(['idVenta', 'fecha', 'estado', 'idEmpresa', 'idCliente', 'idListaPvp'])

export type VentaScalarFieldEnum = z.infer<typeof VentaScalarFieldEnumSchema>;