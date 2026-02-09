import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './ListasSelect.schema';
import { ListasIncludeObjectSchema as ListasIncludeObjectSchema } from './ListasInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ListasSelectObjectSchema).optional(),
  include: z.lazy(() => ListasIncludeObjectSchema).optional()
}).strict();
export const ListasArgsObjectSchema = makeSchema();
export const ListasArgsObjectZodSchema = makeSchema();
