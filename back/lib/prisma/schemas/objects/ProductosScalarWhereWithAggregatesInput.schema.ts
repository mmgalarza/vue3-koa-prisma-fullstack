import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const productosscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductosScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductosScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductosScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductosScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductosScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idProducto: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(120)]).optional(),
  idCategoria: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  descripcion: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  imagen: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  codigo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(40)]).optional().nullable(),
  unidad: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ProductosScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductosScalarWhereWithAggregatesInput> = productosscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductosScalarWhereWithAggregatesInput>;
export const ProductosScalarWhereWithAggregatesInputObjectZodSchema = productosscalarwherewithaggregatesinputSchema;
