import * as z from 'zod';
import { FlujoSchema } from '../../enums/Flujo.schema';
// prettier-ignore
export const RegistroDetResultSchema = z.object({
    idRegistroDet: z.number().int(),
    idRegistro: z.number().int(),
    idProducto: z.number().int(),
    idAlmacen: z.number().int().nullable(),
    flujoAlmacen: FlujoSchema,
    cantidad: z.number(),
    registro: z.unknown(),
    producto: z.unknown(),
    almacen: z.unknown().nullable()
}).strict();

export type RegistroDetResultType = z.infer<typeof RegistroDetResultSchema>;
