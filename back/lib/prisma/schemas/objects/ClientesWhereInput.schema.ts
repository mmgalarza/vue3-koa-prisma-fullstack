import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { VentaListRelationFilterObjectSchema as VentaListRelationFilterObjectSchema } from './VentaListRelationFilter.schema'

const clienteswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientesWhereInputObjectSchema), z.lazy(() => ClientesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientesWhereInputObjectSchema), z.lazy(() => ClientesWhereInputObjectSchema).array()]).optional(),
  idCliente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(120)]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  calle: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  contacto: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(80)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional(),
  ventas: z.lazy(() => VentaListRelationFilterObjectSchema).optional()
}).strict();
export const ClientesWhereInputObjectSchema: z.ZodType<Prisma.ClientesWhereInput> = clienteswhereinputSchema as unknown as z.ZodType<Prisma.ClientesWhereInput>;
export const ClientesWhereInputObjectZodSchema = clienteswhereinputSchema;
