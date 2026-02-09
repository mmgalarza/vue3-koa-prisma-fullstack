import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const UsuarioEmpresaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaAvgOrderByAggregateInput>;
export const UsuarioEmpresaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
