import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateManyActividadInputObjectSchema as RegistroCreateManyActividadInputObjectSchema } from './RegistroCreateManyActividadInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistroCreateManyActividadInputObjectSchema), z.lazy(() => RegistroCreateManyActividadInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistroCreateManyActividadInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistroCreateManyActividadInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateManyActividadInputEnvelope>;
export const RegistroCreateManyActividadInputEnvelopeObjectZodSchema = makeSchema();
