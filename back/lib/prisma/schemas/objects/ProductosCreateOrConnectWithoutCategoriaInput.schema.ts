import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosCreateWithoutCategoriaInputObjectSchema as ProductosCreateWithoutCategoriaInputObjectSchema } from './ProductosCreateWithoutCategoriaInput.schema';
import { ProductosUncheckedCreateWithoutCategoriaInputObjectSchema as ProductosUncheckedCreateWithoutCategoriaInputObjectSchema } from './ProductosUncheckedCreateWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductosCreateWithoutCategoriaInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductosCreateOrConnectWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductosCreateOrConnectWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateOrConnectWithoutCategoriaInput>;
export const ProductosCreateOrConnectWithoutCategoriaInputObjectZodSchema = makeSchema();
