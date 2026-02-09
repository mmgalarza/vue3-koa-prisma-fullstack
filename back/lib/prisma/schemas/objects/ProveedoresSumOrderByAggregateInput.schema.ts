import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idProveedor: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ProveedoresSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresSumOrderByAggregateInput>;
export const ProveedoresSumOrderByAggregateInputObjectZodSchema = makeSchema();
