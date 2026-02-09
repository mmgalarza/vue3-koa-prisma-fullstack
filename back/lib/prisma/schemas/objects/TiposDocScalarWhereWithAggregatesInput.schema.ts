import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumFlujoWithAggregatesFilterObjectSchema as EnumFlujoWithAggregatesFilterObjectSchema } from './EnumFlujoWithAggregatesFilter.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const tiposdocscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TiposDocScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TiposDocScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TiposDocScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TiposDocScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TiposDocScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idTipoDoc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(3)]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(80)]).optional(),
  movAlmacen: z.union([z.lazy(() => EnumFlujoWithAggregatesFilterObjectSchema), FlujoSchema]).optional(),
  idTalon: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const TiposDocScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TiposDocScalarWhereWithAggregatesInput> = tiposdocscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TiposDocScalarWhereWithAggregatesInput>;
export const TiposDocScalarWhereWithAggregatesInputObjectZodSchema = tiposdocscalarwherewithaggregatesinputSchema;
