import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const almacenesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AlmacenesScalarWhereInputObjectSchema), z.lazy(() => AlmacenesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AlmacenesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AlmacenesScalarWhereInputObjectSchema), z.lazy(() => AlmacenesScalarWhereInputObjectSchema).array()]).optional(),
  idAlmacen: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  interno: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  calle: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  responsable: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const AlmacenesScalarWhereInputObjectSchema: z.ZodType<Prisma.AlmacenesScalarWhereInput> = almacenesscalarwhereinputSchema as unknown as z.ZodType<Prisma.AlmacenesScalarWhereInput>;
export const AlmacenesScalarWhereInputObjectZodSchema = almacenesscalarwhereinputSchema;
