import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const actividadscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActividadScalarWhereInputObjectSchema), z.lazy(() => ActividadScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActividadScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActividadScalarWhereInputObjectSchema), z.lazy(() => ActividadScalarWhereInputObjectSchema).array()]).optional(),
  idActividad: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inicio: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  fin: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  activa: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ActividadScalarWhereInputObjectSchema: z.ZodType<Prisma.ActividadScalarWhereInput> = actividadscalarwhereinputSchema as unknown as z.ZodType<Prisma.ActividadScalarWhereInput>;
export const ActividadScalarWhereInputObjectZodSchema = actividadscalarwhereinputSchema;
