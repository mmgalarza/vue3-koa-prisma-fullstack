import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idCategoria: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const CategoriasSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasSumOrderByAggregateInput>;
export const CategoriasSumOrderByAggregateInputObjectZodSchema = makeSchema();
