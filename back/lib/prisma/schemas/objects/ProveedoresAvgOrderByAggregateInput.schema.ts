import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idProveedor: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ProveedoresAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresAvgOrderByAggregateInput>;
export const ProveedoresAvgOrderByAggregateInputObjectZodSchema = makeSchema();
