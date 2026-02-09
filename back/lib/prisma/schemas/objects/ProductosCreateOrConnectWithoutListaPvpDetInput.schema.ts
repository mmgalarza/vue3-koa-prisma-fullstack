import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosCreateWithoutListaPvpDetInputObjectSchema as ProductosCreateWithoutListaPvpDetInputObjectSchema } from './ProductosCreateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListaPvpDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductosCreateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema)])
}).strict();
export const ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateOrConnectWithoutListaPvpDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateOrConnectWithoutListaPvpDetInput>;
export const ProductosCreateOrConnectWithoutListaPvpDetInputObjectZodSchema = makeSchema();
