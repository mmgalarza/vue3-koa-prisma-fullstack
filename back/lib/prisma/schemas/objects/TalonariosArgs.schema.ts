import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './TalonariosSelect.schema';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './TalonariosInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TalonariosSelectObjectSchema).optional(),
  include: z.lazy(() => TalonariosIncludeObjectSchema).optional()
}).strict();
export const TalonariosArgsObjectSchema = makeSchema();
export const TalonariosArgsObjectZodSchema = makeSchema();
