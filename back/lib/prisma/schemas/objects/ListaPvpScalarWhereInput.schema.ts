import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTiposPvpFilterObjectSchema as EnumTiposPvpFilterObjectSchema } from './EnumTiposPvpFilter.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const listapvpscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ListaPvpScalarWhereInputObjectSchema), z.lazy(() => ListaPvpScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListaPvpScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListaPvpScalarWhereInputObjectSchema), z.lazy(() => ListaPvpScalarWhereInputObjectSchema).array()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  criterio: z.union([z.lazy(() => EnumTiposPvpFilterObjectSchema), TiposPvpSchema]).optional(),
  fechaGen: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ListaPvpScalarWhereInputObjectSchema: z.ZodType<Prisma.ListaPvpScalarWhereInput> = listapvpscalarwhereinputSchema as unknown as z.ZodType<Prisma.ListaPvpScalarWhereInput>;
export const ListaPvpScalarWhereInputObjectZodSchema = listapvpscalarwhereinputSchema;
