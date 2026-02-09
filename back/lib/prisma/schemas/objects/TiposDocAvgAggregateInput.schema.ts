import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.literal(true).optional()
}).strict();
export const TiposDocAvgAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocAvgAggregateInputType>;
export const TiposDocAvgAggregateInputObjectZodSchema = makeSchema();
