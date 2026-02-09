import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetCreateManyVentaInputObjectSchema as VentaDetCreateManyVentaInputObjectSchema } from './VentaDetCreateManyVentaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VentaDetCreateManyVentaInputObjectSchema), z.lazy(() => VentaDetCreateManyVentaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VentaDetCreateManyVentaInputEnvelopeObjectSchema: z.ZodType<Prisma.VentaDetCreateManyVentaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateManyVentaInputEnvelope>;
export const VentaDetCreateManyVentaInputEnvelopeObjectZodSchema = makeSchema();
