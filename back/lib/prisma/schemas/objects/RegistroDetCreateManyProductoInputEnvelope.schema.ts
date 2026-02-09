import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateManyProductoInputObjectSchema as RegistroDetCreateManyProductoInputObjectSchema } from './RegistroDetCreateManyProductoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistroDetCreateManyProductoInputObjectSchema), z.lazy(() => RegistroDetCreateManyProductoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistroDetCreateManyProductoInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistroDetCreateManyProductoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateManyProductoInputEnvelope>;
export const RegistroDetCreateManyProductoInputEnvelopeObjectZodSchema = makeSchema();
