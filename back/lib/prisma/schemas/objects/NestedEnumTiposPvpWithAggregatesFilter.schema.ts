import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTiposPvpFilterObjectSchema as NestedEnumTiposPvpFilterObjectSchema } from './NestedEnumTiposPvpFilter.schema'

const nestedenumtipospvpwithaggregatesfilterSchema = z.object({
  equals: TiposPvpSchema.optional(),
  in: TiposPvpSchema.array().optional(),
  notIn: TiposPvpSchema.array().optional(),
  not: z.union([TiposPvpSchema, z.lazy(() => NestedEnumTiposPvpWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTiposPvpFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTiposPvpFilterObjectSchema).optional()
}).strict();
export const NestedEnumTiposPvpWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTiposPvpWithAggregatesFilter> = nestedenumtipospvpwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTiposPvpWithAggregatesFilter>;
export const NestedEnumTiposPvpWithAggregatesFilterObjectZodSchema = nestedenumtipospvpwithaggregatesfilterSchema;
