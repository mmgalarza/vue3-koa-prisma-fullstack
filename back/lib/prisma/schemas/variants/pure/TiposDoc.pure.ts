import * as z from 'zod';
import { FlujoSchema } from '../../enums/Flujo.schema';
// prettier-ignore
export const TiposDocModelSchema = z.object({
    idTipoDoc: z.string(),
    nombre: z.string(),
    movAlmacen: FlujoSchema,
    idTalon: z.number().int().nullable(),
    talonario: z.unknown().nullable(),
    registros: z.array(z.unknown())
}).strict();

export type TiposDocPureType = z.infer<typeof TiposDocModelSchema>;
