import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateManyAlmacenInputObjectSchema as RegistroDetCreateManyAlmacenInputObjectSchema } from './RegistroDetCreateManyAlmacenInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RegistroDetCreateManyAlmacenInputObjectSchema), z.lazy(() => RegistroDetCreateManyAlmacenInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema: z.ZodType<Prisma.RegistroDetCreateManyAlmacenInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateManyAlmacenInputEnvelope>;
export const RegistroDetCreateManyAlmacenInputEnvelopeObjectZodSchema = makeSchema();
