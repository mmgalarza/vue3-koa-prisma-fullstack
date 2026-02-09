import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosUpdateWithoutListaPvpDetInputObjectSchema as ProductosUpdateWithoutListaPvpDetInputObjectSchema } from './ProductosUpdateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutListaPvpDetInput.schema';
import { ProductosCreateWithoutListaPvpDetInputObjectSchema as ProductosCreateWithoutListaPvpDetInputObjectSchema } from './ProductosCreateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListaPvpDetInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductosUpdateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductosCreateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema)]),
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const ProductosUpsertWithoutListaPvpDetInputObjectSchema: z.ZodType<Prisma.ProductosUpsertWithoutListaPvpDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpsertWithoutListaPvpDetInput>;
export const ProductosUpsertWithoutListaPvpDetInputObjectZodSchema = makeSchema();
