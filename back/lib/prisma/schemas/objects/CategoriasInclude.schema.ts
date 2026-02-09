import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ProductosFindManySchema as ProductosFindManySchema } from '../findManyProductos.schema';
import { CategoriasCountOutputTypeArgsObjectSchema as CategoriasCountOutputTypeArgsObjectSchema } from './CategoriasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  productos: z.union([z.boolean(), z.lazy(() => ProductosFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CategoriasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CategoriasIncludeObjectSchema: z.ZodType<Prisma.CategoriasInclude> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasInclude>;
export const CategoriasIncludeObjectZodSchema = makeSchema();
