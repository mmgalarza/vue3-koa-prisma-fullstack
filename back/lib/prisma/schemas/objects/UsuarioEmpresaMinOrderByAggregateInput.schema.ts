import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  rol: SortOrderSchema.optional()
}).strict();
export const UsuarioEmpresaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaMinOrderByAggregateInput>;
export const UsuarioEmpresaMinOrderByAggregateInputObjectZodSchema = makeSchema();
