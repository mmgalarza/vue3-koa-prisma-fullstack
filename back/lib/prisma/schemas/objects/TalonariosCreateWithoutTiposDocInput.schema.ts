import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  nombre: z.string().max(50).optional(),
  inicio: z.number().int().optional(),
  fin: z.number().int().optional(),
  actual: z.number().int().optional()
}).strict();
export const TalonariosCreateWithoutTiposDocInputObjectSchema: z.ZodType<Prisma.TalonariosCreateWithoutTiposDocInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCreateWithoutTiposDocInput>;
export const TalonariosCreateWithoutTiposDocInputObjectZodSchema = makeSchema();
