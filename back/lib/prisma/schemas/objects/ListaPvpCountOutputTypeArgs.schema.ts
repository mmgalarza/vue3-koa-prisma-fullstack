import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCountOutputTypeSelectObjectSchema as ListaPvpCountOutputTypeSelectObjectSchema } from './ListaPvpCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ListaPvpCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ListaPvpCountOutputTypeArgsObjectSchema = makeSchema();
export const ListaPvpCountOutputTypeArgsObjectZodSchema = makeSchema();
