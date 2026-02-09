import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idActividad: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ActividadSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActividadSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadSumOrderByAggregateInput>;
export const ActividadSumOrderByAggregateInputObjectZodSchema = makeSchema();
