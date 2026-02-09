import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCountOutputTypeSelectObjectSchema as EmpresasCountOutputTypeSelectObjectSchema } from './EmpresasCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EmpresasCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeArgsObjectZodSchema = makeSchema();
