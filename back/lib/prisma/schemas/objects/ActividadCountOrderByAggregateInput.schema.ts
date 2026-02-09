import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idActividad: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  activa: SortOrderSchema.optional()
}).strict();
export const ActividadCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActividadCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCountOrderByAggregateInput>;
export const ActividadCountOrderByAggregateInputObjectZodSchema = makeSchema();
