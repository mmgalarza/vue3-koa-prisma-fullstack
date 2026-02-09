import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './EmpresasSelect.schema';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './EmpresasInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EmpresasSelectObjectSchema).optional(),
  include: z.lazy(() => EmpresasIncludeObjectSchema).optional()
}).strict();
export const EmpresasArgsObjectSchema = makeSchema();
export const EmpresasArgsObjectZodSchema = makeSchema();
