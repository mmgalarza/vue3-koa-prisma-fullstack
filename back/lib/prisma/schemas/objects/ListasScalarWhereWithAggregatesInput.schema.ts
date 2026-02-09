import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const listasscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ListasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListasScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idLista: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idProveedor: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  refNo: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  observacion: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable()
}).strict();
export const ListasScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ListasScalarWhereWithAggregatesInput> = listasscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ListasScalarWhereWithAggregatesInput>;
export const ListasScalarWhereWithAggregatesInputObjectZodSchema = listasscalarwherewithaggregatesinputSchema;
