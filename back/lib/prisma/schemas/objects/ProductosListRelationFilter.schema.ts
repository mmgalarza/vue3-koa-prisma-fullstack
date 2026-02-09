import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const ProductosListRelationFilterObjectSchema: z.ZodType<Prisma.ProductosListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductosListRelationFilter>;
export const ProductosListRelationFilterObjectZodSchema = makeSchema();
