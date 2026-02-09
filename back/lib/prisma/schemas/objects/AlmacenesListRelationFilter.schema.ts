import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AlmacenesWhereInputObjectSchema).optional(),
  some: z.lazy(() => AlmacenesWhereInputObjectSchema).optional(),
  none: z.lazy(() => AlmacenesWhereInputObjectSchema).optional()
}).strict();
export const AlmacenesListRelationFilterObjectSchema: z.ZodType<Prisma.AlmacenesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesListRelationFilter>;
export const AlmacenesListRelationFilterObjectZodSchema = makeSchema();
