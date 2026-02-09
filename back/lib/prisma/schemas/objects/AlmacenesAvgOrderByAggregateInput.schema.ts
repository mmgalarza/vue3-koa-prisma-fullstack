import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idAlmacen: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const AlmacenesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesAvgOrderByAggregateInput>;
export const AlmacenesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
