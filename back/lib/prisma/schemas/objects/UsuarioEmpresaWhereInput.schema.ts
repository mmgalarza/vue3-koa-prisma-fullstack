import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumRolUsuarioFilterObjectSchema as EnumRolUsuarioFilterObjectSchema } from './EnumRolUsuarioFilter.schema';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { UsuariosScalarRelationFilterObjectSchema as UsuariosScalarRelationFilterObjectSchema } from './UsuariosScalarRelationFilter.schema';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './UsuariosWhereInput.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const usuarioempresawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioEmpresaWhereInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioEmpresaWhereInputObjectSchema), z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).array()]).optional(),
  idUsuarioEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idUsuario: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rol: z.union([z.lazy(() => EnumRolUsuarioFilterObjectSchema), RolUsuarioSchema]).optional(),
  usuario: z.union([z.lazy(() => UsuariosScalarRelationFilterObjectSchema), z.lazy(() => UsuariosWhereInputObjectSchema)]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional()
}).strict();
export const UsuarioEmpresaWhereInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaWhereInput> = usuarioempresawhereinputSchema as unknown as z.ZodType<Prisma.UsuarioEmpresaWhereInput>;
export const UsuarioEmpresaWhereInputObjectZodSchema = usuarioempresawhereinputSchema;
