import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idRegistroDet: SortOrderSchema.optional(),
  idRegistro: SortOrderSchema.optional(),
  idProducto: SortOrderSchema.optional(),
  idAlmacen: SortOrderSchema.optional(),
  flujoAlmacen: SortOrderSchema.optional(),
  cantidad: SortOrderSchema.optional()
}).strict();
export const RegistroDetCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistroDetCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCountOrderByAggregateInput>;
export const RegistroDetCountOrderByAggregateInputObjectZodSchema = makeSchema();
