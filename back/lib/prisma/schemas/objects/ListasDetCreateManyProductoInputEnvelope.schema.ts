import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateManyProductoInputObjectSchema as ListasDetCreateManyProductoInputObjectSchema } from './ListasDetCreateManyProductoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ListasDetCreateManyProductoInputObjectSchema), z.lazy(() => ListasDetCreateManyProductoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ListasDetCreateManyProductoInputEnvelopeObjectSchema: z.ZodType<Prisma.ListasDetCreateManyProductoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateManyProductoInputEnvelope>;
export const ListasDetCreateManyProductoInputEnvelopeObjectZodSchema = makeSchema();
