import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './VentaDetSelect.schema';
import { VentaDetIncludeObjectSchema as VentaDetIncludeObjectSchema } from './VentaDetInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VentaDetSelectObjectSchema).optional(),
  include: z.lazy(() => VentaDetIncludeObjectSchema).optional()
}).strict();
export const VentaDetArgsObjectSchema = makeSchema();
export const VentaDetArgsObjectZodSchema = makeSchema();
