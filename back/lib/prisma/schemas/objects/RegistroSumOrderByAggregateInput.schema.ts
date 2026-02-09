import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idRegistro: SortOrderSchema.optional(),
  idVenta: SortOrderSchema.optional(),
  idActividad: SortOrderSchema.optional()
}).strict();
export const RegistroSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistroSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroSumOrderByAggregateInput>;
export const RegistroSumOrderByAggregateInputObjectZodSchema = makeSchema();
