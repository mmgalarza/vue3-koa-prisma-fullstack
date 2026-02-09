import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCountOutputTypeSelectObjectSchema as ProductosCountOutputTypeSelectObjectSchema } from './ProductosCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductosCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProductosCountOutputTypeArgsObjectSchema = makeSchema();
export const ProductosCountOutputTypeArgsObjectZodSchema = makeSchema();
