import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTiposPvpWithAggregatesFilterObjectSchema as EnumTiposPvpWithAggregatesFilterObjectSchema } from './EnumTiposPvpWithAggregatesFilter.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const listapvpscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ListaPvpScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListaPvpScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ListaPvpScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ListaPvpScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ListaPvpScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  criterio: z.union([z.lazy(() => EnumTiposPvpWithAggregatesFilterObjectSchema), TiposPvpSchema]).optional(),
  fechaGen: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ListaPvpScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ListaPvpScalarWhereWithAggregatesInput> = listapvpscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ListaPvpScalarWhereWithAggregatesInput>;
export const ListaPvpScalarWhereWithAggregatesInputObjectZodSchema = listapvpscalarwherewithaggregatesinputSchema;
