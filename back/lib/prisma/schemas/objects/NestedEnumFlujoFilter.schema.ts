import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

const nestedenumflujofilterSchema = z.object({
  equals: FlujoSchema.optional(),
  in: FlujoSchema.array().optional(),
  notIn: FlujoSchema.array().optional(),
  not: z.union([FlujoSchema, z.lazy(() => NestedEnumFlujoFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumFlujoFilterObjectSchema: z.ZodType<Prisma.NestedEnumFlujoFilter> = nestedenumflujofilterSchema as unknown as z.ZodType<Prisma.NestedEnumFlujoFilter>;
export const NestedEnumFlujoFilterObjectZodSchema = nestedenumflujofilterSchema;
