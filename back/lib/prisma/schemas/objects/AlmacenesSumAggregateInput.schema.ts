import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idAlmacen: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const AlmacenesSumAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesSumAggregateInputType>;
export const AlmacenesSumAggregateInputObjectZodSchema = makeSchema();
