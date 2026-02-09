import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const proveedoresscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProveedoresScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProveedoresScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProveedoresScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProveedoresScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProveedoresScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idProveedor: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(120)]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  calle: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  contacto: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(80)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ProveedoresScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProveedoresScalarWhereWithAggregatesInput> = proveedoresscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProveedoresScalarWhereWithAggregatesInput>;
export const ProveedoresScalarWhereWithAggregatesInputObjectZodSchema = proveedoresscalarwherewithaggregatesinputSchema;
