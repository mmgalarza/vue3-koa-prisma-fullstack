import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './ProductosSelect.schema';
import { ProductosIncludeObjectSchema as ProductosIncludeObjectSchema } from './ProductosInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductosSelectObjectSchema).optional(),
  include: z.lazy(() => ProductosIncludeObjectSchema).optional()
}).strict();
export const ProductosArgsObjectSchema = makeSchema();
export const ProductosArgsObjectZodSchema = makeSchema();
