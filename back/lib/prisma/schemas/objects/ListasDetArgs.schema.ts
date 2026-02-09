import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './ListasDetSelect.schema';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './ListasDetInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ListasDetSelectObjectSchema).optional(),
  include: z.lazy(() => ListasDetIncludeObjectSchema).optional()
}).strict();
export const ListasDetArgsObjectSchema = makeSchema();
export const ListasDetArgsObjectZodSchema = makeSchema();
