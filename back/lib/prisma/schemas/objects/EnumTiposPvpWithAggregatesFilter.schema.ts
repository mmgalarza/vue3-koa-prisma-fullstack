import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { NestedEnumTiposPvpWithAggregatesFilterObjectSchema as NestedEnumTiposPvpWithAggregatesFilterObjectSchema } from './NestedEnumTiposPvpWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTiposPvpFilterObjectSchema as NestedEnumTiposPvpFilterObjectSchema } from './NestedEnumTiposPvpFilter.schema'

const makeSchema = () => z.object({
  equals: TiposPvpSchema.optional(),
  in: TiposPvpSchema.array().optional(),
  notIn: TiposPvpSchema.array().optional(),
  not: z.union([TiposPvpSchema, z.lazy(() => NestedEnumTiposPvpWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTiposPvpFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTiposPvpFilterObjectSchema).optional()
}).strict();
export const EnumTiposPvpWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTiposPvpWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTiposPvpWithAggregatesFilter>;
export const EnumTiposPvpWithAggregatesFilterObjectZodSchema = makeSchema();
