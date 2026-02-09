import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateManyEmpresaInputObjectSchema as ListaPvpCreateManyEmpresaInputObjectSchema } from './ListaPvpCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ListaPvpCreateManyEmpresaInputObjectSchema), z.lazy(() => ListaPvpCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ListaPvpCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaPvpCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateManyEmpresaInputEnvelope>;
export const ListaPvpCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
