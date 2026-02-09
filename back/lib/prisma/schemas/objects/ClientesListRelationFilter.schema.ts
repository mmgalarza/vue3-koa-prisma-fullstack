import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './ClientesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ClientesWhereInputObjectSchema).optional(),
  some: z.lazy(() => ClientesWhereInputObjectSchema).optional(),
  none: z.lazy(() => ClientesWhereInputObjectSchema).optional()
}).strict();
export const ClientesListRelationFilterObjectSchema: z.ZodType<Prisma.ClientesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClientesListRelationFilter>;
export const ClientesListRelationFilterObjectZodSchema = makeSchema();
