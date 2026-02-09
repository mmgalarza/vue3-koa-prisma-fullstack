import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaPvp: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ListaPvpSumAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpSumAggregateInputType>;
export const ListaPvpSumAggregateInputObjectZodSchema = makeSchema();
