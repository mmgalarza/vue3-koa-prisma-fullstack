import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTiposPvpFilterObjectSchema as EnumTiposPvpFilterObjectSchema } from './EnumTiposPvpFilter.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { ListaPvpDetListRelationFilterObjectSchema as ListaPvpDetListRelationFilterObjectSchema } from './ListaPvpDetListRelationFilter.schema';
import { VentaListRelationFilterObjectSchema as VentaListRelationFilterObjectSchema } from './VentaListRelationFilter.schema'

const listapvpwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListaPvpWhereInputObjectSchema), z.lazy(() => ListaPvpWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListaPvpWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListaPvpWhereInputObjectSchema), z.lazy(() => ListaPvpWhereInputObjectSchema).array()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  criterio: z.union([z.lazy(() => EnumTiposPvpFilterObjectSchema), TiposPvpSchema]).optional(),
  fechaGen: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional(),
  detalles: z.lazy(() => ListaPvpDetListRelationFilterObjectSchema).optional(),
  ventas: z.lazy(() => VentaListRelationFilterObjectSchema).optional()
}).strict();
export const ListaPvpWhereInputObjectSchema: z.ZodType<Prisma.ListaPvpWhereInput> = listapvpwhereinputSchema as unknown as z.ZodType<Prisma.ListaPvpWhereInput>;
export const ListaPvpWhereInputObjectZodSchema = listapvpwhereinputSchema;
