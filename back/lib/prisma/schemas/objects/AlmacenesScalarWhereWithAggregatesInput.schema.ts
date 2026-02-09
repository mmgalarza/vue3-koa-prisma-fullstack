import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const almacenesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AlmacenesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AlmacenesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AlmacenesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AlmacenesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AlmacenesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idAlmacen: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(80)]).optional(),
  interno: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  calle: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  responsable: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(80)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const AlmacenesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AlmacenesScalarWhereWithAggregatesInput> = almacenesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AlmacenesScalarWhereWithAggregatesInput>;
export const AlmacenesScalarWhereWithAggregatesInputObjectZodSchema = almacenesscalarwherewithaggregatesinputSchema;
