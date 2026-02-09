import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const actividadscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActividadScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActividadScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActividadScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActividadScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActividadScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idActividad: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(80)]).optional(),
  inicio: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  fin: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(20)]).optional(),
  activa: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ActividadScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActividadScalarWhereWithAggregatesInput> = actividadscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActividadScalarWhereWithAggregatesInput>;
export const ActividadScalarWhereWithAggregatesInputObjectZodSchema = actividadscalarwherewithaggregatesinputSchema;
