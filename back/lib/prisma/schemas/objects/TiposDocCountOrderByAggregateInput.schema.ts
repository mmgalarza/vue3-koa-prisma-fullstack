import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idTipoDoc: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  movAlmacen: SortOrderSchema.optional(),
  idTalon: SortOrderSchema.optional()
}).strict();
export const TiposDocCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCountOrderByAggregateInput>;
export const TiposDocCountOrderByAggregateInputObjectZodSchema = makeSchema();
