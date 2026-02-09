import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  cae: SortOrderSchema.optional(),
  vencCae: SortOrderSchema.optional(),
  neto: SortOrderSchema.optional(),
  iva: SortOrderSchema.optional(),
  total: SortOrderSchema.optional()
}).strict();
export const FacturaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FacturaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaMaxOrderByAggregateInput>;
export const FacturaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
