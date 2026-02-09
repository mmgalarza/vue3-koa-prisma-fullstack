import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductosCountOrderByAggregateInputObjectSchema as ProductosCountOrderByAggregateInputObjectSchema } from './ProductosCountOrderByAggregateInput.schema';
import { ProductosAvgOrderByAggregateInputObjectSchema as ProductosAvgOrderByAggregateInputObjectSchema } from './ProductosAvgOrderByAggregateInput.schema';
import { ProductosMaxOrderByAggregateInputObjectSchema as ProductosMaxOrderByAggregateInputObjectSchema } from './ProductosMaxOrderByAggregateInput.schema';
import { ProductosMinOrderByAggregateInputObjectSchema as ProductosMinOrderByAggregateInputObjectSchema } from './ProductosMinOrderByAggregateInput.schema';
import { ProductosSumOrderByAggregateInputObjectSchema as ProductosSumOrderByAggregateInputObjectSchema } from './ProductosSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idProducto: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  idCategoria: SortOrderSchema.optional(),
  descripcion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imagen: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codigo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  unidad: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductosCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductosAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductosMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductosMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductosSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductosOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductosOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosOrderByWithAggregationInput>;
export const ProductosOrderByWithAggregationInputObjectZodSchema = makeSchema();
