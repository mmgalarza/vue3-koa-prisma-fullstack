import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCreateManyEmpresaInputObjectSchema as AlmacenesCreateManyEmpresaInputObjectSchema } from './AlmacenesCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AlmacenesCreateManyEmpresaInputObjectSchema), z.lazy(() => AlmacenesCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AlmacenesCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.AlmacenesCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateManyEmpresaInputEnvelope>;
export const AlmacenesCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
