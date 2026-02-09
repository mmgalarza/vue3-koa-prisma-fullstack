import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './RegistroDetWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RegistroDetWhereInputObjectSchema).optional(),
  some: z.lazy(() => RegistroDetWhereInputObjectSchema).optional(),
  none: z.lazy(() => RegistroDetWhereInputObjectSchema).optional()
}).strict();
export const RegistroDetListRelationFilterObjectSchema: z.ZodType<Prisma.RegistroDetListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetListRelationFilter>;
export const RegistroDetListRelationFilterObjectZodSchema = makeSchema();
