import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './RegistroWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RegistroWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RegistroWhereInputObjectSchema).optional()
}).strict();
export const RegistroScalarRelationFilterObjectSchema: z.ZodType<Prisma.RegistroScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RegistroScalarRelationFilter>;
export const RegistroScalarRelationFilterObjectZodSchema = makeSchema();
