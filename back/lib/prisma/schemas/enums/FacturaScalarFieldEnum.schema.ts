import * as z from 'zod';

export const FacturaScalarFieldEnumSchema = z.enum(['idVenta', 'cae', 'vencCae', 'neto', 'iva', 'total'])

export type FacturaScalarFieldEnum = z.infer<typeof FacturaScalarFieldEnumSchema>;