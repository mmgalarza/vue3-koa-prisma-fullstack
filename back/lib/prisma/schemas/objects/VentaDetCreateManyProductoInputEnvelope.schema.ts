import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetCreateManyProductoInputObjectSchema as VentaDetCreateManyProductoInputObjectSchema } from './VentaDetCreateManyProductoInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VentaDetCreateManyProductoInputObjectSchema), z.lazy(() => VentaDetCreateManyProductoInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VentaDetCreateManyProductoInputEnvelopeObjectSchema: z.ZodType<Prisma.VentaDetCreateManyProductoInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateManyProductoInputEnvelope>;
export const VentaDetCreateManyProductoInputEnvelopeObjectZodSchema = makeSchema();
