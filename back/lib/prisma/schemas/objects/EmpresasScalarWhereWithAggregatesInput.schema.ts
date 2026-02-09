import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const empresasscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EmpresasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EmpresasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmpresasScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmpresasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EmpresasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  calle: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  contacto: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(80)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const EmpresasScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EmpresasScalarWhereWithAggregatesInput> = empresasscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EmpresasScalarWhereWithAggregatesInput>;
export const EmpresasScalarWhereWithAggregatesInputObjectZodSchema = empresasscalarwherewithaggregatesinputSchema;
