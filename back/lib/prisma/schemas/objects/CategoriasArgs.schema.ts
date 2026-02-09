import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './CategoriasSelect.schema';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './CategoriasInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CategoriasSelectObjectSchema).optional(),
  include: z.lazy(() => CategoriasIncludeObjectSchema).optional()
}).strict();
export const CategoriasArgsObjectSchema = makeSchema();
export const CategoriasArgsObjectZodSchema = makeSchema();
