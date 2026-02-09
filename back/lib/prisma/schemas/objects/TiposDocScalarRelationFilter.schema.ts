import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './TiposDocWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TiposDocWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TiposDocWhereInputObjectSchema).optional()
}).strict();
export const TiposDocScalarRelationFilterObjectSchema: z.ZodType<Prisma.TiposDocScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocScalarRelationFilter>;
export const TiposDocScalarRelationFilterObjectZodSchema = makeSchema();
