import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumRolUsuarioWithAggregatesFilterObjectSchema as EnumRolUsuarioWithAggregatesFilterObjectSchema } from './EnumRolUsuarioWithAggregatesFilter.schema';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema'

const usuarioempresascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioEmpresaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioEmpresaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioEmpresaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioEmpresaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioEmpresaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idUsuarioEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idUsuario: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  rol: z.union([z.lazy(() => EnumRolUsuarioWithAggregatesFilterObjectSchema), RolUsuarioSchema]).optional()
}).strict();
export const UsuarioEmpresaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaScalarWhereWithAggregatesInput> = usuarioempresascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UsuarioEmpresaScalarWhereWithAggregatesInput>;
export const UsuarioEmpresaScalarWhereWithAggregatesInputObjectZodSchema = usuarioempresascalarwherewithaggregatesinputSchema;
