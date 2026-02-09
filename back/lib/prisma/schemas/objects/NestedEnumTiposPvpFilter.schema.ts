import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema'

const nestedenumtipospvpfilterSchema = z.object({
  equals: TiposPvpSchema.optional(),
  in: TiposPvpSchema.array().optional(),
  notIn: TiposPvpSchema.array().optional(),
  not: z.union([TiposPvpSchema, z.lazy(() => NestedEnumTiposPvpFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTiposPvpFilterObjectSchema: z.ZodType<Prisma.NestedEnumTiposPvpFilter> = nestedenumtipospvpfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTiposPvpFilter>;
export const NestedEnumTiposPvpFilterObjectZodSchema = nestedenumtipospvpfilterSchema;
