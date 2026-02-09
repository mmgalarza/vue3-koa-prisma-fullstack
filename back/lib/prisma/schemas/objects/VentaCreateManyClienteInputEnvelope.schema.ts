import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateManyClienteInputObjectSchema as VentaCreateManyClienteInputObjectSchema } from './VentaCreateManyClienteInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VentaCreateManyClienteInputObjectSchema), z.lazy(() => VentaCreateManyClienteInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VentaCreateManyClienteInputEnvelopeObjectSchema: z.ZodType<Prisma.VentaCreateManyClienteInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyClienteInputEnvelope>;
export const VentaCreateManyClienteInputEnvelopeObjectZodSchema = makeSchema();
