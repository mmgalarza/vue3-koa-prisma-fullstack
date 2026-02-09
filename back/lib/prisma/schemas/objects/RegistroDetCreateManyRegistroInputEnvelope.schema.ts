import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateManyRegistroInputObjectSchema as RegistroDetCreateManyRegistroInputObjectSchema } from './RegistroDetCreateManyRegistroInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistroDetCreateManyRegistroInputObjectSchema), z.lazy(() => RegistroDetCreateManyRegistroInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistroDetCreateManyRegistroInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistroDetCreateManyRegistroInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateManyRegistroInputEnvelope>;
export const RegistroDetCreateManyRegistroInputEnvelopeObjectZodSchema = makeSchema();
