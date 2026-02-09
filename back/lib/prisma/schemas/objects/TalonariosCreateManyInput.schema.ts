import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.number().int().optional(),
  nombre: z.string().max(50).optional(),
  inicio: z.number().int().optional(),
  fin: z.number().int().optional(),
  actual: z.number().int().optional()
}).strict();
export const TalonariosCreateManyInputObjectSchema: z.ZodType<Prisma.TalonariosCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCreateManyInput>;
export const TalonariosCreateManyInputObjectZodSchema = makeSchema();
