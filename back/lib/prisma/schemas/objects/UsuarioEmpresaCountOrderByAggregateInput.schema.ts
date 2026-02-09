import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  rol: SortOrderSchema.optional()
}).strict();
export const UsuarioEmpresaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCountOrderByAggregateInput>;
export const UsuarioEmpresaCountOrderByAggregateInputObjectZodSchema = makeSchema();
