import * as z from 'zod';
import { TiposPvpSchema } from '../../enums/TiposPvp.schema';
// prettier-ignore
export const ListaPvpResultSchema = z.object({
    idListaPvp: z.number().int(),
    nombre: z.string(),
    criterio: TiposPvpSchema,
    fechaGen: z.date(),
    idEmpresa: z.number().int(),
    empresa: z.unknown(),
    detalles: z.array(z.unknown()),
    ventas: z.array(z.unknown())
}).strict();

export type ListaPvpResultType = z.infer<typeof ListaPvpResultSchema>;
