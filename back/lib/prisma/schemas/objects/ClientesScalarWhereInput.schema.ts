import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const clientesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientesScalarWhereInputObjectSchema), z.lazy(() => ClientesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientesScalarWhereInputObjectSchema), z.lazy(() => ClientesScalarWhereInputObjectSchema).array()]).optional(),
  idCliente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  calle: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  contacto: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ClientesScalarWhereInputObjectSchema: z.ZodType<Prisma.ClientesScalarWhereInput> = clientesscalarwhereinputSchema as unknown as z.ZodType<Prisma.ClientesScalarWhereInput>;
export const ClientesScalarWhereInputObjectZodSchema = clientesscalarwhereinputSchema;
