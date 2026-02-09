import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idAlmacen: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const AlmacenesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesSumOrderByAggregateInput>;
export const AlmacenesSumOrderByAggregateInputObjectZodSchema = makeSchema();
