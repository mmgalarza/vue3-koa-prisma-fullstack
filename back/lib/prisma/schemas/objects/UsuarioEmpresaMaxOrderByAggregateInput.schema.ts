import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  rol: SortOrderSchema.optional()
}).strict();
export const UsuarioEmpresaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaMaxOrderByAggregateInput>;
export const UsuarioEmpresaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
