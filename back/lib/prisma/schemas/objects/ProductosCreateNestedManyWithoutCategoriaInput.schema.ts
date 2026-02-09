import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutCategoriaInputObjectSchema as ProductosCreateWithoutCategoriaInputObjectSchema } from './ProductosCreateWithoutCategoriaInput.schema';
import { ProductosUncheckedCreateWithoutCategoriaInputObjectSchema as ProductosUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductosUncheckedCreateWithoutCategoriaInput.schema';
import { ProductosCreateOrConnectWithoutCategoriaInputObjectSchema as ProductosCreateOrConnectWithoutCategoriaInputObjectSchema } from './ProductosCreateOrConnectWithoutCategoriaInput.schema';
import { ProductosCreateManyCategoriaInputEnvelopeObjectSchema as ProductosCreateManyCategoriaInputEnvelopeObjectSchema } from './ProductosCreateManyCategoriaInputEnvelope.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosCreateWithoutCategoriaInputObjectSchema).array(), z.lazy(() => ProductosUncheckedCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutCategoriaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductosCreateOrConnectWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosCreateOrConnectWithoutCategoriaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductosCreateManyCategoriaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductosWhereUniqueInputObjectSchema), z.lazy(() => ProductosWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductosCreateNestedManyWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductosCreateNestedManyWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateNestedManyWithoutCategoriaInput>;
export const ProductosCreateNestedManyWithoutCategoriaInputObjectZodSchema = makeSchema();
