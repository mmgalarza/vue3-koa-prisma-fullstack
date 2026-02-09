import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const listasscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListasScalarWhereInputObjectSchema), z.lazy(() => ListasScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListasScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListasScalarWhereInputObjectSchema), z.lazy(() => ListasScalarWhereInputObjectSchema).array()]).optional(),
  idLista: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProveedor: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  refNo: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  observacion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ListasScalarWhereInputObjectSchema: z.ZodType<Prisma.ListasScalarWhereInput> = listasscalarwhereinputSchema as unknown as z.ZodType<Prisma.ListasScalarWhereInput>;
export const ListasScalarWhereInputObjectZodSchema = listasscalarwhereinputSchema;
