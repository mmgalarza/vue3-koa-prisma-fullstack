import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCountOutputTypeSelectObjectSchema as CategoriasCountOutputTypeSelectObjectSchema } from './CategoriasCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CategoriasCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CategoriasCountOutputTypeArgsObjectSchema = makeSchema();
export const CategoriasCountOutputTypeArgsObjectZodSchema = makeSchema();
