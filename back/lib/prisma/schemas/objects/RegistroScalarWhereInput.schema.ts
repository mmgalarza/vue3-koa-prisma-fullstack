import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const registroscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistroScalarWhereInputObjectSchema), z.lazy(() => RegistroScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistroScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistroScalarWhereInputObjectSchema), z.lazy(() => RegistroScalarWhereInputObjectSchema).array()]).optional(),
  idRegistro: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  numero: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  idTipoDoc: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  idVenta: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  idActividad: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const RegistroScalarWhereInputObjectSchema: z.ZodType<Prisma.RegistroScalarWhereInput> = registroscalarwhereinputSchema as unknown as z.ZodType<Prisma.RegistroScalarWhereInput>;
export const RegistroScalarWhereInputObjectZodSchema = registroscalarwhereinputSchema;
