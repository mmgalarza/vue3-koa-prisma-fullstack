import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './RegistroSelect.schema';
import { RegistroIncludeObjectSchema as RegistroIncludeObjectSchema } from './RegistroInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RegistroSelectObjectSchema).optional(),
  include: z.lazy(() => RegistroIncludeObjectSchema).optional()
}).strict();
export const RegistroArgsObjectSchema = makeSchema();
export const RegistroArgsObjectZodSchema = makeSchema();
