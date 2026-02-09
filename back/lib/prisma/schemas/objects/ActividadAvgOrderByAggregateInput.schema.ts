import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idActividad: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ActividadAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActividadAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadAvgOrderByAggregateInput>;
export const ActividadAvgOrderByAggregateInputObjectZodSchema = makeSchema();
