import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const registroscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistroScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistroScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistroScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistroScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistroScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idRegistro: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  numero: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(20)]).optional(),
  idTipoDoc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  idVenta: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  idActividad: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const RegistroScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RegistroScalarWhereWithAggregatesInput> = registroscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RegistroScalarWhereWithAggregatesInput>;
export const RegistroScalarWhereWithAggregatesInputObjectZodSchema = registroscalarwherewithaggregatesinputSchema;
