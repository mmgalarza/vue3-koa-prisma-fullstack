import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './TiposDocSelect.schema';
import { TiposDocIncludeObjectSchema as TiposDocIncludeObjectSchema } from './TiposDocInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TiposDocSelectObjectSchema).optional(),
  include: z.lazy(() => TiposDocIncludeObjectSchema).optional()
}).strict();
export const TiposDocArgsObjectSchema = makeSchema();
export const TiposDocArgsObjectZodSchema = makeSchema();
