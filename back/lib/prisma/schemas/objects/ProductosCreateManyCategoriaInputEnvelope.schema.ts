import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateManyCategoriaInputObjectSchema as ProductosCreateManyCategoriaInputObjectSchema } from './ProductosCreateManyCategoriaInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductosCreateManyCategoriaInputObjectSchema), z.lazy(() => ProductosCreateManyCategoriaInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductosCreateManyCategoriaInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductosCreateManyCategoriaInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateManyCategoriaInputEnvelope>;
export const ProductosCreateManyCategoriaInputEnvelopeObjectZodSchema = makeSchema();
