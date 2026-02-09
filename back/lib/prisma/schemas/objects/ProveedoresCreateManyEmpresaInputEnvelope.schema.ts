import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateManyEmpresaInputObjectSchema as ProveedoresCreateManyEmpresaInputObjectSchema } from './ProveedoresCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProveedoresCreateManyEmpresaInputObjectSchema), z.lazy(() => ProveedoresCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.ProveedoresCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateManyEmpresaInputEnvelope>;
export const ProveedoresCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
