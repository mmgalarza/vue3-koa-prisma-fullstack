import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProveedoresScalarRelationFilterObjectSchema as ProveedoresScalarRelationFilterObjectSchema } from './ProveedoresScalarRelationFilter.schema';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './ProveedoresWhereInput.schema';
import { ListasDetListRelationFilterObjectSchema as ListasDetListRelationFilterObjectSchema } from './ListasDetListRelationFilter.schema'

const listaswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListasWhereInputObjectSchema), z.lazy(() => ListasWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListasWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListasWhereInputObjectSchema), z.lazy(() => ListasWhereInputObjectSchema).array()]).optional(),
  idLista: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idProveedor: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  refNo: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  observacion: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  proveedor: z.union([z.lazy(() => ProveedoresScalarRelationFilterObjectSchema), z.lazy(() => ProveedoresWhereInputObjectSchema)]).optional(),
  detalles: z.lazy(() => ListasDetListRelationFilterObjectSchema).optional()
}).strict();
export const ListasWhereInputObjectSchema: z.ZodType<Prisma.ListasWhereInput> = listaswhereinputSchema as unknown as z.ZodType<Prisma.ListasWhereInput>;
export const ListasWhereInputObjectZodSchema = listaswhereinputSchema;
