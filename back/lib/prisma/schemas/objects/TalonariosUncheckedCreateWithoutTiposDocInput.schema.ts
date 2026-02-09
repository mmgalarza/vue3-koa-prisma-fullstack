import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.number().int().optional(),
  nombre: z.string().optional(),
  inicio: z.number().int().optional(),
  fin: z.number().int().optional(),
  actual: z.number().int().optional()
}).strict();
export const TalonariosUncheckedCreateWithoutTiposDocInputObjectSchema: z.ZodType<Prisma.TalonariosUncheckedCreateWithoutTiposDocInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUncheckedCreateWithoutTiposDocInput>;
export const TalonariosUncheckedCreateWithoutTiposDocInputObjectZodSchema = makeSchema();
