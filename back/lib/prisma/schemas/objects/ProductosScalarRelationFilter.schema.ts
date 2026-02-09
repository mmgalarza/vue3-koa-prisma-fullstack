import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const ProductosScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProductosScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductosScalarRelationFilter>;
export const ProductosScalarRelationFilterObjectZodSchema = makeSchema();
