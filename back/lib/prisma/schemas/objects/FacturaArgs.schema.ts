import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './FacturaSelect.schema';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './FacturaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FacturaSelectObjectSchema).optional(),
  include: z.lazy(() => FacturaIncludeObjectSchema).optional()
}).strict();
export const FacturaArgsObjectSchema = makeSchema();
export const FacturaArgsObjectZodSchema = makeSchema();
