import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCountOutputTypeSelectObjectSchema as ListasCountOutputTypeSelectObjectSchema } from './ListasCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ListasCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ListasCountOutputTypeArgsObjectSchema = makeSchema();
export const ListasCountOutputTypeArgsObjectZodSchema = makeSchema();
