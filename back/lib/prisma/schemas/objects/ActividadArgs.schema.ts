import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './ActividadSelect.schema';
import { ActividadIncludeObjectSchema as ActividadIncludeObjectSchema } from './ActividadInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActividadSelectObjectSchema).optional(),
  include: z.lazy(() => ActividadIncludeObjectSchema).optional()
}).strict();
export const ActividadArgsObjectSchema = makeSchema();
export const ActividadArgsObjectZodSchema = makeSchema();
