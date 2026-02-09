import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateManyVentaInputObjectSchema as RegistroCreateManyVentaInputObjectSchema } from './RegistroCreateManyVentaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistroCreateManyVentaInputObjectSchema), z.lazy(() => RegistroCreateManyVentaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistroCreateManyVentaInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistroCreateManyVentaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateManyVentaInputEnvelope>;
export const RegistroCreateManyVentaInputEnvelopeObjectZodSchema = makeSchema();
