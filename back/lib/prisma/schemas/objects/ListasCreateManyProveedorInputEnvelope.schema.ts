import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCreateManyProveedorInputObjectSchema as ListasCreateManyProveedorInputObjectSchema } from './ListasCreateManyProveedorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ListasCreateManyProveedorInputObjectSchema), z.lazy(() => ListasCreateManyProveedorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ListasCreateManyProveedorInputEnvelopeObjectSchema: z.ZodType<Prisma.ListasCreateManyProveedorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateManyProveedorInputEnvelope>;
export const ListasCreateManyProveedorInputEnvelopeObjectZodSchema = makeSchema();
