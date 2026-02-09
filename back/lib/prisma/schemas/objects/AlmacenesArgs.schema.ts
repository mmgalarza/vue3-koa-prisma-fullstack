import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './AlmacenesSelect.schema';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './AlmacenesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AlmacenesSelectObjectSchema).optional(),
  include: z.lazy(() => AlmacenesIncludeObjectSchema).optional()
}).strict();
export const AlmacenesArgsObjectSchema = makeSchema();
export const AlmacenesArgsObjectZodSchema = makeSchema();
