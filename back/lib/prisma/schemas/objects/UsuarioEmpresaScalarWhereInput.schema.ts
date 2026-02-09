import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumRolUsuarioFilterObjectSchema as EnumRolUsuarioFilterObjectSchema } from './EnumRolUsuarioFilter.schema';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema'

const usuarioempresascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema), z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema), z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema).array()]).optional(),
  idUsuarioEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idUsuario: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rol: z.union([z.lazy(() => EnumRolUsuarioFilterObjectSchema), RolUsuarioSchema]).optional()
}).strict();
export const UsuarioEmpresaScalarWhereInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaScalarWhereInput> = usuarioempresascalarwhereinputSchema as unknown as z.ZodType<Prisma.UsuarioEmpresaScalarWhereInput>;
export const UsuarioEmpresaScalarWhereInputObjectZodSchema = usuarioempresascalarwhereinputSchema;
