import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosWhereInputObjectSchema as UsuariosWhereInputObjectSchema } from './UsuariosWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UsuariosWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => UsuariosWhereInputObjectSchema).optional()
}).strict();
export const UsuariosScalarRelationFilterObjectSchema: z.ZodType<Prisma.UsuariosScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosScalarRelationFilter>;
export const UsuariosScalarRelationFilterObjectZodSchema = makeSchema();
