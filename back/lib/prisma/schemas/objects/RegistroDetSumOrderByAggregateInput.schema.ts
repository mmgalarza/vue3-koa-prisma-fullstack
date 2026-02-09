import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idRegistroDet: SortOrderSchema.optional(),
  idRegistro: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  idAlmacen: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional()
}).strict();
export const RegistroDetSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistroDetSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetSumOrderByAggregateInput>;
export const RegistroDetSumOrderByAggregateInputObjectZodSchema = makeSchema();
