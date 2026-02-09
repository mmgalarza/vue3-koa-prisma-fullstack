import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './RegistroDetSelect.schema';
import { RegistroDetIncludeObjectSchema as RegistroDetIncludeObjectSchema } from './RegistroDetInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RegistroDetSelectObjectSchema).optional(),
  include: z.lazy(() => RegistroDetIncludeObjectSchema).optional()
}).strict();
export const RegistroDetArgsObjectSchema = makeSchema();
export const RegistroDetArgsObjectZodSchema = makeSchema();
