import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateManyTalonarioInputObjectSchema as TiposDocCreateManyTalonarioInputObjectSchema } from './TiposDocCreateManyTalonarioInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TiposDocCreateManyTalonarioInputObjectSchema), z.lazy(() => TiposDocCreateManyTalonarioInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TiposDocCreateManyTalonarioInputEnvelopeObjectSchema: z.ZodType<Prisma.TiposDocCreateManyTalonarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateManyTalonarioInputEnvelope>;
export const TiposDocCreateManyTalonarioInputEnvelopeObjectZodSchema = makeSchema();
