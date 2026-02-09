import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutListaPvpDetInputObjectSchema as ProductosCreateWithoutListaPvpDetInputObjectSchema } from './ProductosCreateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListaPvpDetInput.schema';
import { ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema as ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema } from './ProductosCreateOrConnectWithoutListaPvpDetInput.schema';
import { ProductosUpsertWithoutListaPvpDetInputObjectSchema as ProductosUpsertWithoutListaPvpDetInputObjectSchema } from './ProductosUpsertWithoutListaPvpDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateToOneWithWhereWithoutListaPvpDetInputObjectSchema as ProductosUpdateToOneWithWhereWithoutListaPvpDetInputObjectSchema } from './ProductosUpdateToOneWithWhereWithoutListaPvpDetInput.schema';
import { ProductosUpdateWithoutListaPvpDetInputObjectSchema as ProductosUpdateWithoutListaPvpDetInputObjectSchema } from './ProductosUpdateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutListaPvpDetInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListaPvpDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutListaPvpDetInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductosUpsertWithoutListaPvpDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductosUpdateToOneWithWhereWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUpdateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema)]).optional()
}).strict();
export const ProductosUpdateOneRequiredWithoutListaPvpDetNestedInputObjectSchema: z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutListaPvpDetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutListaPvpDetNestedInput>;
export const ProductosUpdateOneRequiredWithoutListaPvpDetNestedInputObjectZodSchema = makeSchema();
