import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idLista: SortOrderSchema.optional(),
  idProveedor: SortOrderSchema.optional()
}).strict();
export const ListasSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListasSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasSumOrderByAggregateInput>;
export const ListasSumOrderByAggregateInputObjectZodSchema = makeSchema();
