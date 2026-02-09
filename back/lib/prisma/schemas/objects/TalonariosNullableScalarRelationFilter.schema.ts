import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './TalonariosWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TalonariosWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TalonariosWhereInputObjectSchema).optional().nullable()
}).strict();
export const TalonariosNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TalonariosNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosNullableScalarRelationFilter>;
export const TalonariosNullableScalarRelationFilterObjectZodSchema = makeSchema();
