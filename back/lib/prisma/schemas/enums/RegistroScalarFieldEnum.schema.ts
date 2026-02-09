import * as z from 'zod';

export const RegistroScalarFieldEnumSchema = z.enum(['idRegistro', 'fecha', 'numero', 'idTipoDoc', 'idVenta', 'idActividad'])

export type RegistroScalarFieldEnum = z.infer<typeof RegistroScalarFieldEnumSchema>;