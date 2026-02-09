import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesSelectObjectSchema as ClientesSelectObjectSchema } from './ClientesSelect.schema';
import { ClientesIncludeObjectSchema as ClientesIncludeObjectSchema } from './ClientesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientesSelectObjectSchema).optional(),
  include: z.lazy(() => ClientesIncludeObjectSchema).optional()
}).strict();
export const ClientesArgsObjectSchema = makeSchema();
export const ClientesArgsObjectZodSchema = makeSchema();
