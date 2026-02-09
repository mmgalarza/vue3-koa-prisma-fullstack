import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './ListaPvpDetSelect.schema';
import { ListaPvpDetIncludeObjectSchema as ListaPvpDetIncludeObjectSchema } from './ListaPvpDetInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ListaPvpDetSelectObjectSchema).optional(),
  include: z.lazy(() => ListaPvpDetIncludeObjectSchema).optional()
}).strict();
export const ListaPvpDetArgsObjectSchema = makeSchema();
export const ListaPvpDetArgsObjectZodSchema = makeSchema();
