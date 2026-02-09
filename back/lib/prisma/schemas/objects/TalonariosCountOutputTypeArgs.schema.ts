import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosCountOutputTypeSelectObjectSchema as TalonariosCountOutputTypeSelectObjectSchema } from './TalonariosCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TalonariosCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TalonariosCountOutputTypeArgsObjectSchema = makeSchema();
export const TalonariosCountOutputTypeArgsObjectZodSchema = makeSchema();
