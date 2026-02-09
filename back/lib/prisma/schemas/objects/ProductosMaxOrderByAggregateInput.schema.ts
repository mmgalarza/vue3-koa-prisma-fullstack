import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idProducto: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  idCategoria: SortOrderSchema.optional(),
  descripcion: SortOrderSchema.optional(),
  imagen: SortOrderSchema.optional(),
  codigo: SortOrderSchema.optional(),
  unidad: SortOrderSchema.optional(),
  activo: SortOrderSchema.optional()
}).strict();
export const ProductosMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductosMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosMaxOrderByAggregateInput>;
export const ProductosMaxOrderByAggregateInputObjectZodSchema = makeSchema();
