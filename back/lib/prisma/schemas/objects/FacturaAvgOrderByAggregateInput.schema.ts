import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  neto: SortOrderSchema.optional(),
  iva: SortOrderSchema.optional(),
  total: SortOrderSchema.optional()
}).strict();
export const FacturaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FacturaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaAvgOrderByAggregateInput>;
export const FacturaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
