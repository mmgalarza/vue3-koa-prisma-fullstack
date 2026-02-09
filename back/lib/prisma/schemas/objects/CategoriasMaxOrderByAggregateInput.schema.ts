import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idCategoria: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  descripcion: SortOrderSchema.optional(),
  icono: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const CategoriasMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriasMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasMaxOrderByAggregateInput>;
export const CategoriasMaxOrderByAggregateInputObjectZodSchema = makeSchema();
