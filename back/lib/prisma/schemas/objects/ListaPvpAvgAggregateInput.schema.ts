import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaPvp: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ListaPvpAvgAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpAvgAggregateInputType>;
export const ListaPvpAvgAggregateInputObjectZodSchema = makeSchema();
