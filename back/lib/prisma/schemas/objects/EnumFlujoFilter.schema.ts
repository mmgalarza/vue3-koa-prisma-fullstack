import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { NestedEnumFlujoFilterObjectSchema as NestedEnumFlujoFilterObjectSchema } from './NestedEnumFlujoFilter.schema'

const makeSchema = () => z.object({
  equals: FlujoSchema.optional(),
  in: FlujoSchema.array().optional(),
  notIn: FlujoSchema.array().optional(),
  not: z.union([FlujoSchema, z.lazy(() => NestedEnumFlujoFilterObjectSchema)]).optional()
}).strict();
export const EnumFlujoFilterObjectSchema: z.ZodType<Prisma.EnumFlujoFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFlujoFilter>;
export const EnumFlujoFilterObjectZodSchema = makeSchema();
