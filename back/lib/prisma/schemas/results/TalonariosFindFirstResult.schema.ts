import * as z from 'zod';
export const TalonariosFindFirstResultSchema = z.nullable(z.object({
  idTalon: z.number().int(),
  nombre: z.string(),
  inicio: z.number().int(),
  fin: z.number().int(),
  actual: z.number().int(),
  tiposDoc: z.array(z.unknown())
}));