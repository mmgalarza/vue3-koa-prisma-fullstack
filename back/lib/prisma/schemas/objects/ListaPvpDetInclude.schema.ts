import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpArgsObjectSchema as ListaPvpArgsObjectSchema } from './ListaPvpArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema'

const makeSchema = () => z.object({
  listaPvp: z.union([z.boolean(), z.lazy(() => ListaPvpArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional()
}).strict();
export const ListaPvpDetIncludeObjectSchema: z.ZodType<Prisma.ListaPvpDetInclude> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetInclude>;
export const ListaPvpDetIncludeObjectZodSchema = makeSchema();
