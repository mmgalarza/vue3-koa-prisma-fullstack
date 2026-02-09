import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateNestedManyWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateNestedManyWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  username: z.string().max(50),
  email: z.string().max(100),
  password: z.string().max(255),
  nombre: z.string().max(80),
  activo: z.boolean().optional(),
  creadoEn: z.coerce.date().optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuariosCreateInputObjectSchema: z.ZodType<Prisma.UsuariosCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosCreateInput>;
export const UsuariosCreateInputObjectZodSchema = makeSchema();
