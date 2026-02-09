import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuario: SortOrderSchema.optional()
}).strict();
export const UsuariosAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosAvgOrderByAggregateInput>;
export const UsuariosAvgOrderByAggregateInputObjectZodSchema = makeSchema();
