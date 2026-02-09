import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateWithoutCategoriaInputObjectSchema as ProductosUpdateWithoutCategoriaInputObjectSchema } from './ProductosUpdateWithoutCategoriaInput.schema';
import { ProductosUncheckedUpdateWithoutCategoriaInputObjectSchema as ProductosUncheckedUpdateWithoutCategoriaInputObjectSchema } from './ProductosUncheckedUpdateWithoutCategoriaInput.schema';
import { ProductosCreateWithoutCategoriaInputObjectSchema as ProductosCreateWithoutCategoriaInputObjectSchema } from './ProductosCreateWithoutCategoriaInput.schema';
import { ProductosUncheckedCreateWithoutCategoriaInputObjectSchema as ProductosUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductosUncheckedCreateWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductosUpdateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutCategoriaInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductosCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductosUpsertWithWhereUniqueWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpsertWithWhereUniqueWithoutCategoriaInput>;
export const ProductosUpsertWithWhereUniqueWithoutCategoriaInputObjectZodSchema = makeSchema();
