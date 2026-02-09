import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateManyTipoDocInputObjectSchema as RegistroCreateManyTipoDocInputObjectSchema } from './RegistroCreateManyTipoDocInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistroCreateManyTipoDocInputObjectSchema), z.lazy(() => RegistroCreateManyTipoDocInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistroCreateManyTipoDocInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistroCreateManyTipoDocInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateManyTipoDocInputEnvelope>;
export const RegistroCreateManyTipoDocInputEnvelopeObjectZodSchema = makeSchema();
