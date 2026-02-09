import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCountOutputTypeSelectObjectSchema as ProveedoresCountOutputTypeSelectObjectSchema } from './ProveedoresCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProveedoresCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProveedoresCountOutputTypeArgsObjectSchema = makeSchema();
export const ProveedoresCountOutputTypeArgsObjectZodSchema = makeSchema();
