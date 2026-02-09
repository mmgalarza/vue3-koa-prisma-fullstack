import * as z from 'zod';
export const TalonariosCreateResultSchema = z.object({
  idTalon: z.number().int(),
  nombre: z.string(),
  inicio: z.number().int(),
  fin: z.number().int(),
  actual: z.number().int(),
  tiposDoc: z.array(z.unknown())
});