import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCategoria: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const CategoriasAvgAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasAvgAggregateInputType>;
export const CategoriasAvgAggregateInputObjectZodSchema = makeSchema();
