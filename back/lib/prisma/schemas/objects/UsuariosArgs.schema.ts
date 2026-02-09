import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosSelectObjectSchema as UsuariosSelectObjectSchema } from './UsuariosSelect.schema';
import { UsuariosIncludeObjectSchema as UsuariosIncludeObjectSchema } from './UsuariosInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UsuariosSelectObjectSchema).optional(),
  include: z.lazy(() => UsuariosIncludeObjectSchema).optional()
}).strict();
export const UsuariosArgsObjectSchema = makeSchema();
export const UsuariosArgsObjectZodSchema = makeSchema();
