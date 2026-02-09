import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuario: SortOrderSchema.optional()
}).strict();
export const UsuariosSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosSumOrderByAggregateInput>;
export const UsuariosSumOrderByAggregateInputObjectZodSchema = makeSchema();
