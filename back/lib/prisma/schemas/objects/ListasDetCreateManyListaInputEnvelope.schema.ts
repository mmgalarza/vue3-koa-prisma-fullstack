import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateManyListaInputObjectSchema as ListasDetCreateManyListaInputObjectSchema } from './ListasDetCreateManyListaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ListasDetCreateManyListaInputObjectSchema), z.lazy(() => ListasDetCreateManyListaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ListasDetCreateManyListaInputEnvelopeObjectSchema: z.ZodType<Prisma.ListasDetCreateManyListaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateManyListaInputEnvelope>;
export const ListasDetCreateManyListaInputEnvelopeObjectZodSchema = makeSchema();
