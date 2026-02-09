import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { NestedEnumTiposPvpFilterObjectSchema as NestedEnumTiposPvpFilterObjectSchema } from './NestedEnumTiposPvpFilter.schema'

const makeSchema = () => z.object({
  equals: TiposPvpSchema.optional(),
  in: TiposPvpSchema.array().optional(),
  notIn: TiposPvpSchema.array().optional(),
  not: z.union([TiposPvpSchema, z.lazy(() => NestedEnumTiposPvpFilterObjectSchema)]).optional()
}).strict();
export const EnumTiposPvpFilterObjectSchema: z.ZodType<Prisma.EnumTiposPvpFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTiposPvpFilter>;
export const EnumTiposPvpFilterObjectZodSchema = makeSchema();
