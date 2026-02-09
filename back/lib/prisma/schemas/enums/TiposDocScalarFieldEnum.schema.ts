import * as z from 'zod';

export const TiposDocScalarFieldEnumSchema = z.enum(['idTipoDoc', 'nombre', 'movAlmacen', 'idTalon'])

export type TiposDocScalarFieldEnum = z.infer<typeof TiposDocScalarFieldEnumSchema>;