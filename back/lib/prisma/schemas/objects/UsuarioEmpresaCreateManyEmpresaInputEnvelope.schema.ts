import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateManyEmpresaInputObjectSchema as UsuarioEmpresaCreateManyEmpresaInputObjectSchema } from './UsuarioEmpresaCreateManyEmpresaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UsuarioEmpresaCreateManyEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateManyEmpresaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateManyEmpresaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateManyEmpresaInputEnvelope>;
export const UsuarioEmpresaCreateManyEmpresaInputEnvelopeObjectZodSchema = makeSchema();
