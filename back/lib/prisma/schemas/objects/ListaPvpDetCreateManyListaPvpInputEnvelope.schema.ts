import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetCreateManyListaPvpInputObjectSchema as ListaPvpDetCreateManyListaPvpInputObjectSchema } from './ListaPvpDetCreateManyListaPvpInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ListaPvpDetCreateManyListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetCreateManyListaPvpInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateManyListaPvpInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateManyListaPvpInputEnvelope>;
export const ListaPvpDetCreateManyListaPvpInputEnvelopeObjectZodSchema = makeSchema();
