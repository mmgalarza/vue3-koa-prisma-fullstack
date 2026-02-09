import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCountOutputTypeSelectObjectSchema as ActividadCountOutputTypeSelectObjectSchema } from './ActividadCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActividadCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ActividadCountOutputTypeArgsObjectSchema = makeSchema();
export const ActividadCountOutputTypeArgsObjectZodSchema = makeSchema();
