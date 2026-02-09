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
export const UsuariosMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuariosMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosMinOrderByAggregateInput>;
export const UsuariosMinOrderByAggregateInputObjectZodSchema = makeSchema();
