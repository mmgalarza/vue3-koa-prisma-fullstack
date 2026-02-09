import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaPvp: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  criterio: z.literal(true).optional(),
  fechaGen: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ListaPvpCountAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCountAggregateInputType>;
export const ListaPvpCountAggregateInputObjectZodSchema = makeSchema();
