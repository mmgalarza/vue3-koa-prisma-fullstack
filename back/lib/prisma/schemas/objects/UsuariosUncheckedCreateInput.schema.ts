import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  idUsuario: z.number().int().optional(),
  username: z.string().max(50),
  email: z.string().max(100),
  password: z.string().max(255),
  nombre: z.string().max(80),
  activo: z.boolean().optional(),
  creadoEn: z.coerce.date().optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema).optional()
}).strict();
export const UsuariosUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UsuariosUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosUncheckedCreateInput>;
export const UsuariosUncheckedCreateInputObjectZodSchema = makeSchema();
