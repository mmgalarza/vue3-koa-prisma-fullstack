import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.literal(true).optional()
}).strict();
export const TiposDocSumAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocSumAggregateInputType>;
export const TiposDocSumAggregateInputObjectZodSchema = makeSchema();
