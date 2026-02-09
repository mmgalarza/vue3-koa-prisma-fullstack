import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTalon: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  inicio: z.literal(true).optional(),
  fin: z.literal(true).optional(),
  actual: z.literal(true).optional()
}).strict();
export const TalonariosMaxAggregateInputObjectSchema: z.ZodType<Prisma.TalonariosMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosMaxAggregateInputType>;
export const TalonariosMaxAggregateInputObjectZodSchema = makeSchema();
