import * as z from 'zod';
import { FlujoSchema } from '../../enums/Flujo.schema';
// prettier-ignore
export const TiposDocInputSchema = z.object({
    idTipoDoc: z.string(),
    nombre: z.string(),
    movAlmacen: FlujoSchema,
    idTalon: z.number().int().optional().nullable(),
    talonario: z.unknown().optional().nullable(),
    registros: z.array(z.unknown())
}).strict();

export type TiposDocInputType = z.infer<typeof TiposDocInputSchema>;
