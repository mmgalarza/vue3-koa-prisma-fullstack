import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const CategoriasCountOutputTypeCountProductosArgsObjectSchema = makeSchema();
export const CategoriasCountOutputTypeCountProductosArgsObjectZodSchema = makeSchema();
