import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.literal(true).optional(),
  inicio: z.literal(true).optional(),
  fin: z.literal(true).optional(),
  actual: z.literal(true).optional()
}).strict();
export const TalonariosSumAggregateInputObjectSchema: z.ZodType<Prisma.TalonariosSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosSumAggregateInputType>;
export const TalonariosSumAggregateInputObjectZodSchema = makeSchema();
