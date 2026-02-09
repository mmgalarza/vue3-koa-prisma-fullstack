import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosArgsObjectSchema as UsuariosArgsObjectSchema } from './UsuariosArgs.schema';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: z.boolean().optional(),
  idUsuario: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  usuario: z.union([z.boolean(), z.lazy(() => UsuariosArgsObjectSchema)]).optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  rol: z.boolean().optional()
}).strict();
export const UsuarioEmpresaSelectObjectSchema: z.ZodType<Prisma.UsuarioEmpresaSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaSelect>;
export const UsuarioEmpresaSelectObjectZodSchema = makeSchema();
