import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CategoriasCountOrderByAggregateInputObjectSchema as CategoriasCountOrderByAggregateInputObjectSchema } from './CategoriasCountOrderByAggregateInput.schema';
import { CategoriasAvgOrderByAggregateInputObjectSchema as CategoriasAvgOrderByAggregateInputObjectSchema } from './CategoriasAvgOrderByAggregateInput.schema';
import { CategoriasMaxOrderByAggregateInputObjectSchema as CategoriasMaxOrderByAggregateInputObjectSchema } from './CategoriasMaxOrderByAggregateInput.schema';
import { CategoriasMinOrderByAggregateInputObjectSchema as CategoriasMinOrderByAggregateInputObjectSchema } from './CategoriasMinOrderByAggregateInput.schema';
import { CategoriasSumOrderByAggregateInputObjectSchema as CategoriasSumOrderByAggregateInputObjectSchema } from './CategoriasSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  idCategoria: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  descripcion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  icono: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  _count: z.lazy(() => CategoriasCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CategoriasAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CategoriasMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CategoriasMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CategoriasSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CategoriasOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CategoriasOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasOrderByWithAggregationInput>;
export const CategoriasOrderByWithAggregationInputObjectZodSchema = makeSchema();
