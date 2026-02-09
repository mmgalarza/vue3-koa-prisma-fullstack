import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCountOutputTypeSelectObjectSchema as RegistroCountOutputTypeSelectObjectSchema } from './RegistroCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RegistroCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RegistroCountOutputTypeArgsObjectSchema = makeSchema();
export const RegistroCountOutputTypeArgsObjectZodSchema = makeSchema();
