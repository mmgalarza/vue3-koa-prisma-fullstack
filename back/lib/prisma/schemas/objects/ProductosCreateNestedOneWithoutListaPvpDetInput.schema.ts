import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutListaPvpDetInputObjectSchema as ProductosCreateWithoutListaPvpDetInputObjectSchema } from './ProductosCreateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListaPvpDetInput.schema';
import { ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema as ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema } from './ProductosCreateOrConnectWithoutListaPvpDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductosCreateNestedOneWithoutListaPvpDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateNestedOneWithoutListaPvpDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateNestedOneWithoutListaPvpDetInput>;
export const ProductosCreateNestedOneWithoutListaPvpDetInputObjectZodSchema = makeSchema();
