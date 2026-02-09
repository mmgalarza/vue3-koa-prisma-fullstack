import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCountOutputTypeSelectObjectSchema as VentaCountOutputTypeSelectObjectSchema } from './VentaCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VentaCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const VentaCountOutputTypeArgsObjectSchema = makeSchema();
export const VentaCountOutputTypeArgsObjectZodSchema = makeSchema();
