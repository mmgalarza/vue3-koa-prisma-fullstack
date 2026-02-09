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
export const FacturaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FacturaCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaCountOrderByAggregateInput>;
export const FacturaCountOrderByAggregateInputObjectZodSchema = makeSchema();
