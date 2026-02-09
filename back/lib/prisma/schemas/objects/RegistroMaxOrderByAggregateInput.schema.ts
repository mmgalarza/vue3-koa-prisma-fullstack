import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idRegistro: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  numero: SortOrderSchema.optional(),
  idTipoDoc: SortOrderSchema.optional(),
  idVenta: SortOrderSchema.optional(),
  idActividad: SortOrderSchema.optional()
}).strict();
export const RegistroMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RegistroMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroMaxOrderByAggregateInput>;
export const RegistroMaxOrderByAggregateInputObjectZodSchema = makeSchema();
