import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasArgsObjectSchema as ListasArgsObjectSchema } from './ListasArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema'

const makeSchema = () => z.object({
  lista: z.union([z.boolean(), z.lazy(() => ListasArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional()
}).strict();
export const ListasDetIncludeObjectSchema: z.ZodType<Prisma.ListasDetInclude> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetInclude>;
export const ListasDetIncludeObjectZodSchema = makeSchema();
