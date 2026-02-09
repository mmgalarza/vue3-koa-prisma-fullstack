import * as z from 'zod';
// prettier-ignore
export const TalonariosModelSchema = z.object({
    idTalon: z.number().int(),
    nombre: z.string(),
    inicio: z.number().int(),
    fin: z.number().int(),
    actual: z.number().int(),
    tiposDoc: z.array(z.unknown())
}).strict();

export type TalonariosPureType = z.infer<typeof TalonariosModelSchema>;
