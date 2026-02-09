import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './VentaSelect.schema';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './VentaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VentaSelectObjectSchema).optional(),
  include: z.lazy(() => VentaIncludeObjectSchema).optional()
}).strict();
export const VentaArgsObjectSchema = makeSchema();
export const VentaArgsObjectZodSchema = makeSchema();
