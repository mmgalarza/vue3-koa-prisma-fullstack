import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './TiposDocWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TiposDocWhereInputObjectSchema).optional(),
  some: z.lazy(() => TiposDocWhereInputObjectSchema).optional(),
  none: z.lazy(() => TiposDocWhereInputObjectSchema).optional()
}).strict();
export const TiposDocListRelationFilterObjectSchema: z.ZodType<Prisma.TiposDocListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocListRelationFilter>;
export const TiposDocListRelationFilterObjectZodSchema = makeSchema();
