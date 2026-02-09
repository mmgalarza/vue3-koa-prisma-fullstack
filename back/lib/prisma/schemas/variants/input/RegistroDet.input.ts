import * as z from 'zod';
import { FlujoSchema } from '../../enums/Flujo.schema';
// prettier-ignore
export const RegistroDetInputSchema = z.object({
    idRegistroDet: z.number().int(),
    idRegistro: z.number().int(),
    idProducto: z.number().int(),
    idAlmacen: z.number().int().optional().nullable(),
    flujoAlmacen: FlujoSchema,
    cantidad: z.number(),
    registro: z.unknown(),
    producto: z.unknown(),
    almacen: z.unknown().optional().nullable()
}).strict();

export type RegistroDetInputType = z.infer<typeof RegistroDetInputSchema>;
