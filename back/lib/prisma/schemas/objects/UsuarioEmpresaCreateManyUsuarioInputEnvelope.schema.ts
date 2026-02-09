import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateManyUsuarioInputObjectSchema as UsuarioEmpresaCreateManyUsuarioInputObjectSchema } from './UsuarioEmpresaCreateManyUsuarioInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UsuarioEmpresaCreateManyUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaCreateManyUsuarioInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateManyUsuarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateManyUsuarioInputEnvelope>;
export const UsuarioEmpresaCreateManyUsuarioInputEnvelopeObjectZodSchema = makeSchema();
