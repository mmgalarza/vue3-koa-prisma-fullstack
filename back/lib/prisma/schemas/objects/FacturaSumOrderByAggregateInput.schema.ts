import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  neto: SortOrderSchema.optional(),
  iva: SortOrderSchema.optional(),
  total: SortOrderSchema.optional()
}).strict();
export const FacturaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FacturaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaSumOrderByAggregateInput>;
export const FacturaSumOrderByAggregateInputObjectZodSchema = makeSchema();
