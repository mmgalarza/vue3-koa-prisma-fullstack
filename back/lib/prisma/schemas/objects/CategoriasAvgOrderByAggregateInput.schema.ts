import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idCategoria: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const CategoriasAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasAvgOrderByAggregateInput>;
export const CategoriasAvgOrderByAggregateInputObjectZodSchema = makeSchema();
