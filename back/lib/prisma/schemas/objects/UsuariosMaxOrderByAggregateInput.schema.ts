import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idUsuario: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  creadoEn: SortOrderSchema.optional(),
  actualizadoEn: SortOrderSchema.optional()
}).strict();
export const UsuariosMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosMaxOrderByAggregateInput>;
export const UsuariosMaxOrderByAggregateInputObjectZodSchema = makeSchema();
