import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateManyEmpresaInputObjectSchema as VentaCreateManyEmpresaInputObjectSchema } from './VentaCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VentaCreateManyEmpresaInputObjectSchema), z.lazy(() => VentaCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VentaCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.VentaCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateManyEmpresaInputEnvelope>;
export const VentaCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
