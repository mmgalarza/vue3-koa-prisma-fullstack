import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idListaPvp: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  criterio: SortOrderSchema.optional(),
  fechaGen: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ListaPvpMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpMinOrderByAggregateInput>;
export const ListaPvpMinOrderByAggregateInputObjectZodSchema = makeSchema();
