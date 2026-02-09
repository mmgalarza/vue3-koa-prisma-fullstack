import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AlmacenesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AlmacenesWhereInputObjectSchema).optional().nullable()
}).strict();
export const AlmacenesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AlmacenesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesNullableScalarRelationFilter>;
export const AlmacenesNullableScalarRelationFilterObjectZodSchema = makeSchema();
