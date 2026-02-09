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
export const ActividadMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActividadMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadMaxOrderByAggregateInput>;
export const ActividadMaxOrderByAggregateInputObjectZodSchema = makeSchema();
