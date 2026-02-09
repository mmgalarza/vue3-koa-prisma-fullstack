import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateManyListaPvpInputObjectSchema as VentaCreateManyListaPvpInputObjectSchema } from './VentaCreateManyListaPvpInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VentaCreateManyListaPvpInputObjectSchema), z.lazy(() => VentaCreateManyListaPvpInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VentaCreateManyListaPvpInputEnvelopeObjectSchema: z.ZodType<Prisma.VentaCreateManyListaPvpInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyListaPvpInputEnvelope>;
export const VentaCreateManyListaPvpInputEnvelopeObjectZodSchema = makeSchema();
