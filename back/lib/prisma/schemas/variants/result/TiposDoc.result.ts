import * as z from 'zod';
import { FlujoSchema } from '../../enums/Flujo.schema';
// prettier-ignore
export const TiposDocResultSchema = z.object({
    idTipoDoc: z.string(),
    nombre: z.string(),
    movAlmacen: FlujoSchema,
    idTalon: z.number().int().nullable(),
    talonario: z.unknown().nullable(),
    registros: z.array(z.unknown())
}).strict();

export type TiposDocResultType = z.infer<typeof TiposDocResultSchema>;
