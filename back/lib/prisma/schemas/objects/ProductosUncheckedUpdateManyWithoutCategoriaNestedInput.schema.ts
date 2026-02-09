import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutCategoriaInputObjectSchema as ProductosCreateWithoutCategoriaInputObjectSchema } from './ProductosCreateWithoutCategoriaInput.schema';
import { ProductosUncheckedCreateWithoutCategoriaInputObjectSchema as ProductosUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductosUncheckedCreateWithoutCategoriaInput.schema';
import { ProductosCreateOrConnectWithoutCategoriaInputObjectSchema as ProductosCreateOrConnectWithoutCategoriaInputObjectSchema } from './ProductosCreateOrConnectWithoutCategoriaInput.schema';
import { ProductosUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema as ProductosUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema } from './ProductosUpsertWithWhereUniqueWithoutCategoriaInput.schema';
import { ProductosCreateManyCategoriaInputEnvelopeObjectSchema as ProductosCreateManyCategoriaInputEnvelopeObjectSchema } from './ProductosCreateManyCategoriaInputEnvelope.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema as ProductosUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema } from './ProductosUpdateWithWhereUniqueWithoutCategoriaInput.schema';
import { ProductosUpdateManyWithWhereWithoutCategoriaInputObjectSchema as ProductosUpdateManyWithWhereWithoutCategoriaInputObjectSchema } from './ProductosUpdateManyWithWhereWithoutCategoriaInput.schema';
import { ProductosScalarWhereInputObjectSchema as ProductosScalarWhereInputObjectSchema } from './ProductosScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosCreateWithoutCategoriaInputObjectSchema).array(), z.lazy(() => ProductosUncheckedCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutCategoriaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductosCreateOrConnectWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosCreateOrConnectWithoutCategoriaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductosUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductosCreateManyCategoriaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductosWhereUniqueInputObjectSchema), z.lazy(() => ProductosWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductosWhereUniqueInputObjectSchema), z.lazy(() => ProductosWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductosWhereUniqueInputObjectSchema), z.lazy(() => ProductosWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductosWhereUniqueInputObjectSchema), z.lazy(() => ProductosWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductosUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductosUpdateManyWithWhereWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUpdateManyWithWhereWithoutCategoriaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductosScalarWhereInputObjectSchema), z.lazy(() => ProductosScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductosUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema: z.ZodType<Prisma.ProductosUncheckedUpdateManyWithoutCategoriaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUncheckedUpdateManyWithoutCategoriaNestedInput>;
export const ProductosUncheckedUpdateManyWithoutCategoriaNestedInputObjectZodSchema = makeSchema();
