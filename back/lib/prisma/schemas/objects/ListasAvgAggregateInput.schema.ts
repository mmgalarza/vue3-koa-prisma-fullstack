import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.literal(true).optional(),
  idProveedor: z.literal(true).optional()
}).strict();
export const ListasAvgAggregateInputObjectSchema: z.ZodType<Prisma.ListasAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListasAvgAggregateInputType>;
export const ListasAvgAggregateInputObjectZodSchema = makeSchema();
