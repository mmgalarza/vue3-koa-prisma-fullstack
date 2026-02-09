import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idCliente: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ClientesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesSumOrderByAggregateInput>;
export const ClientesSumOrderByAggregateInputObjectZodSchema = makeSchema();
