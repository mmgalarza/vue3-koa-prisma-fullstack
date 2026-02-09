import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateWithoutCategoriaInputObjectSchema as ProductosUpdateWithoutCategoriaInputObjectSchema } from './ProductosUpdateWithoutCategoriaInput.schema';
import { ProductosUncheckedUpdateWithoutCategoriaInputObjectSchema as ProductosUncheckedUpdateWithoutCategoriaInputObjectSchema } from './ProductosUncheckedUpdateWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductosUpdateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductosUpdateWithWhereUniqueWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateWithWhereUniqueWithoutCategoriaInput>;
export const ProductosUpdateWithWhereUniqueWithoutCategoriaInputObjectZodSchema = makeSchema();
