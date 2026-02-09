import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UsuarioEmpresaListRelationFilterObjectSchema as UsuarioEmpresaListRelationFilterObjectSchema } from './UsuarioEmpresaListRelationFilter.schema'

const usuarioswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuariosWhereInputObjectSchema), z.lazy(() => UsuariosWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuariosWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuariosWhereInputObjectSchema), z.lazy(() => UsuariosWhereInputObjectSchema).array()]).optional(),
  idUsuario: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(80)]).optional(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  creadoEn: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  actualizadoEn: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaListRelationFilterObjectSchema).optional()
}).strict();
export const UsuariosWhereInputObjectSchema: z.ZodType<Prisma.UsuariosWhereInput> = usuarioswhereinputSchema as unknown as z.ZodType<Prisma.UsuariosWhereInput>;
export const UsuariosWhereInputObjectZodSchema = usuarioswhereinputSchema;
