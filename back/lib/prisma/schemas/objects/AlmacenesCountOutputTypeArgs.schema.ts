import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCountOutputTypeSelectObjectSchema as AlmacenesCountOutputTypeSelectObjectSchema } from './AlmacenesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AlmacenesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AlmacenesCountOutputTypeArgsObjectSchema = makeSchema();
export const AlmacenesCountOutputTypeArgsObjectZodSchema = makeSchema();
