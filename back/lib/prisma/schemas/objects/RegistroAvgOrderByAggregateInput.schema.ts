import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idRegistro: SortOrderSchema.optional(),
  idVenta: SortOrderSchema.optional(),
  idActividad: SortOrderSchema.optional()
}).strict();
export const RegistroAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistroAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroAvgOrderByAggregateInput>;
export const RegistroAvgOrderByAggregateInputObjectZodSchema = makeSchema();
