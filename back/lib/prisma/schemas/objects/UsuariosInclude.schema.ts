import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaFindManySchema as UsuarioEmpresaFindManySchema } from '../findManyUsuarioEmpresa.schema';
import { UsuariosCountOutputTypeArgsObjectSchema as UsuariosCountOutputTypeArgsObjectSchema } from './UsuariosCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  UsuarioEmpresas: z.union([z.boolean(), z.lazy(() => UsuarioEmpresaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsuariosCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UsuariosIncludeObjectSchema: z.ZodType<Prisma.UsuariosInclude> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosInclude>;
export const UsuariosIncludeObjectZodSchema = makeSchema();
