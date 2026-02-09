import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosArgsObjectSchema as UsuariosArgsObjectSchema } from './UsuariosArgs.schema';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema'

const makeSchema = () => z.object({
  usuario: z.union([z.boolean(), z.lazy(() => UsuariosArgsObjectSchema)]).optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional()
}).strict();
export const UsuarioEmpresaIncludeObjectSchema: z.ZodType<Prisma.UsuarioEmpresaInclude> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaInclude>;
export const UsuarioEmpresaIncludeObjectZodSchema = makeSchema();
