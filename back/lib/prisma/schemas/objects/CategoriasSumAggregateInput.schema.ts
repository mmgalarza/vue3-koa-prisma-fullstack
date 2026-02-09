import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCategoria: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const CategoriasSumAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasSumAggregateInputType>;
export const CategoriasSumAggregateInputObjectZodSchema = makeSchema();
