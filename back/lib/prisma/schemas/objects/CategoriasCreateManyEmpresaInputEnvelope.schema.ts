import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCreateManyEmpresaInputObjectSchema as CategoriasCreateManyEmpresaInputObjectSchema } from './CategoriasCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CategoriasCreateManyEmpresaInputObjectSchema), z.lazy(() => CategoriasCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CategoriasCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.CategoriasCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateManyEmpresaInputEnvelope>;
export const CategoriasCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
