import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasScalarRelationFilterObjectSchema: z.ZodType<Prisma.EmpresasScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasScalarRelationFilter>;
export const EmpresasScalarRelationFilterObjectZodSchema = makeSchema();
