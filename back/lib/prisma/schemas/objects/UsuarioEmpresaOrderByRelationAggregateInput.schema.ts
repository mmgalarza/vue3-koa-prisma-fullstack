import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UsuarioEmpresaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaOrderByRelationAggregateInput>;
export const UsuarioEmpresaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
