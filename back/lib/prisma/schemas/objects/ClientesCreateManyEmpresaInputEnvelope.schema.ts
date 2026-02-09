import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCreateManyEmpresaInputObjectSchema as ClientesCreateManyEmpresaInputObjectSchema } from './ClientesCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ClientesCreateManyEmpresaInputObjectSchema), z.lazy(() => ClientesCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ClientesCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.ClientesCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCreateManyEmpresaInputEnvelope>;
export const ClientesCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
