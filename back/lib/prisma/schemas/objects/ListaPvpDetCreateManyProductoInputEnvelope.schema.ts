import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetCreateManyProductoInputObjectSchema as ListaPvpDetCreateManyProductoInputObjectSchema } from './ListaPvpDetCreateManyProductoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ListaPvpDetCreateManyProductoInputObjectSchema), z.lazy(() => ListaPvpDetCreateManyProductoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateManyProductoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateManyProductoInputEnvelope>;
export const ListaPvpDetCreateManyProductoInputEnvelopeObjectZodSchema = makeSchema();
