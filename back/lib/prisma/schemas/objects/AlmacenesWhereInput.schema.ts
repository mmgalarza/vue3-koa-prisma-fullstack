import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { RegistroDetListRelationFilterObjectSchema as RegistroDetListRelationFilterObjectSchema } from './RegistroDetListRelationFilter.schema'

const almaceneswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AlmacenesWhereInputObjectSchema), z.lazy(() => AlmacenesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AlmacenesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AlmacenesWhereInputObjectSchema), z.lazy(() => AlmacenesWhereInputObjectSchema).array()]).optional(),
  idAlmacen: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(80)]).optional(),
  interno: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  calle: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  responsable: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(80)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional(),
  registrosDet: z.lazy(() => RegistroDetListRelationFilterObjectSchema).optional()
}).strict();
export const AlmacenesWhereInputObjectSchema: z.ZodType<Prisma.AlmacenesWhereInput> = almaceneswhereinputSchema as unknown as z.ZodType<Prisma.AlmacenesWhereInput>;
export const AlmacenesWhereInputObjectZodSchema = almaceneswhereinputSchema;
