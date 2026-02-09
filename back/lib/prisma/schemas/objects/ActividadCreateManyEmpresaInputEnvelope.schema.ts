import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadCreateManyEmpresaInputObjectSchema as ActividadCreateManyEmpresaInputObjectSchema } from './ActividadCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActividadCreateManyEmpresaInputObjectSchema), z.lazy(() => ActividadCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActividadCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.ActividadCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateManyEmpresaInputEnvelope>;
export const ActividadCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
