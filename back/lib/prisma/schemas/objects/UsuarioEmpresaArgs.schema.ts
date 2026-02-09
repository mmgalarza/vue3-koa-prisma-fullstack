import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaSelectObjectSchema as UsuarioEmpresaSelectObjectSchema } from './UsuarioEmpresaSelect.schema';
import { UsuarioEmpresaIncludeObjectSchema as UsuarioEmpresaIncludeObjectSchema } from './UsuarioEmpresaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UsuarioEmpresaSelectObjectSchema).optional(),
  include: z.lazy(() => UsuarioEmpresaIncludeObjectSchema).optional()
}).strict();
export const UsuarioEmpresaArgsObjectSchema = makeSchema();
export const UsuarioEmpresaArgsObjectZodSchema = makeSchema();
