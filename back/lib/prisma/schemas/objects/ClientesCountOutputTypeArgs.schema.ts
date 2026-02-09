import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCountOutputTypeSelectObjectSchema as ClientesCountOutputTypeSelectObjectSchema } from './ClientesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ClientesCountOutputTypeArgsObjectSchema = makeSchema();
export const ClientesCountOutputTypeArgsObjectZodSchema = makeSchema();
