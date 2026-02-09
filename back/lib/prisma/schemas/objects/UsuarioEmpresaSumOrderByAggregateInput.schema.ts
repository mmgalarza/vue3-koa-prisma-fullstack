import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: SortOrderSchema.optional(),
  idUsuario: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const UsuarioEmpresaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaSumOrderByAggregateInput>;
export const UsuarioEmpresaSumOrderByAggregateInputObjectZodSchema = makeSchema();
