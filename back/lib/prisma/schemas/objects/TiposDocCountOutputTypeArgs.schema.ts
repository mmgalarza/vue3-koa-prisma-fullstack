import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCountOutputTypeSelectObjectSchema as TiposDocCountOutputTypeSelectObjectSchema } from './TiposDocCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TiposDocCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TiposDocCountOutputTypeArgsObjectSchema = makeSchema();
export const TiposDocCountOutputTypeArgsObjectZodSchema = makeSchema();
