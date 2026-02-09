import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const usuariosscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuariosScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuariosScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuariosScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuariosScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuariosScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idUsuario: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(80)]).optional(),
  activo: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  creadoEn: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  actualizadoEn: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UsuariosScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UsuariosScalarWhereWithAggregatesInput> = usuariosscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UsuariosScalarWhereWithAggregatesInput>;
export const UsuariosScalarWhereWithAggregatesInputObjectZodSchema = usuariosscalarwherewithaggregatesinputSchema;
