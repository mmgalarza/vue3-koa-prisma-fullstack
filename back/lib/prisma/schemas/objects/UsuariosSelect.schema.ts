import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaFindManySchema as UsuarioEmpresaFindManySchema } from '../findManyUsuarioEmpresa.schema';
import { UsuariosCountOutputTypeArgsObjectSchema as UsuariosCountOutputTypeArgsObjectSchema } from './UsuariosCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idUsuario: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  nombre: z.boolean().optional(),
  activo: z.boolean().optional(),
  creadoEn: z.boolean().optional(),
  actualizadoEn: z.boolean().optional(),
  UsuarioEmpresas: z.union([z.boolean(), z.lazy(() => UsuarioEmpresaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UsuariosCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UsuariosSelectObjectSchema: z.ZodType<Prisma.UsuariosSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosSelect>;
export const UsuariosSelectObjectZodSchema = makeSchema();
