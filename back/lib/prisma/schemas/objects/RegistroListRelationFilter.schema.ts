import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './RegistroWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RegistroWhereInputObjectSchema).optional(),
  some: z.lazy(() => RegistroWhereInputObjectSchema).optional(),
  none: z.lazy(() => RegistroWhereInputObjectSchema).optional()
}).strict();
export const RegistroListRelationFilterObjectSchema: z.ZodType<Prisma.RegistroListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RegistroListRelationFilter>;
export const RegistroListRelationFilterObjectZodSchema = makeSchema();
