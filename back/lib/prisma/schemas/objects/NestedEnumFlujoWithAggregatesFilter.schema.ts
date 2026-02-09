import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFlujoFilterObjectSchema as NestedEnumFlujoFilterObjectSchema } from './NestedEnumFlujoFilter.schema'

const nestedenumflujowithaggregatesfilterSchema = z.object({
  equals: FlujoSchema.optional(),
  in: FlujoSchema.array().optional(),
  notIn: FlujoSchema.array().optional(),
  not: z.union([FlujoSchema, z.lazy(() => NestedEnumFlujoWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFlujoFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFlujoFilterObjectSchema).optional()
}).strict();
export const NestedEnumFlujoWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumFlujoWithAggregatesFilter> = nestedenumflujowithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumFlujoWithAggregatesFilter>;
export const NestedEnumFlujoWithAggregatesFilterObjectZodSchema = nestedenumflujowithaggregatesfilterSchema;
