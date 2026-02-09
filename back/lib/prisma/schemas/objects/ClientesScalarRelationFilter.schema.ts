import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './ClientesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ClientesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ClientesWhereInputObjectSchema).optional()
}).strict();
export const ClientesScalarRelationFilterObjectSchema: z.ZodType<Prisma.ClientesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClientesScalarRelationFilter>;
export const ClientesScalarRelationFilterObjectZodSchema = makeSchema();
