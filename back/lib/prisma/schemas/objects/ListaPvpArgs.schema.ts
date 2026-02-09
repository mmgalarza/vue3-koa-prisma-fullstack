import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './ListaPvpSelect.schema';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './ListaPvpInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ListaPvpSelectObjectSchema).optional(),
  include: z.lazy(() => ListaPvpIncludeObjectSchema).optional()
}).strict();
export const ListaPvpArgsObjectSchema = makeSchema();
export const ListaPvpArgsObjectZodSchema = makeSchema();
