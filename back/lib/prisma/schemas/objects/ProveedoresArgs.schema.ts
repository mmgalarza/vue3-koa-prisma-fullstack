import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './ProveedoresSelect.schema';
import { ProveedoresIncludeObjectSchema as ProveedoresIncludeObjectSchema } from './ProveedoresInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProveedoresSelectObjectSchema).optional(),
  include: z.lazy(() => ProveedoresIncludeObjectSchema).optional()
}).strict();
export const ProveedoresArgsObjectSchema = makeSchema();
export const ProveedoresArgsObjectZodSchema = makeSchema();
