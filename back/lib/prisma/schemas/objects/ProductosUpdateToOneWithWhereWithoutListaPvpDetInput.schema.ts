import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema';
import { ProductosUpdateWithoutListaPvpDetInputObjectSchema as ProductosUpdateWithoutListaPvpDetInputObjectSchema } from './ProductosUpdateWithoutListaPvpDetInput.schema';
import { ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema as ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutListaPvpDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductosUpdateWithoutListaPvpDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema)])
}).strict();
export const ProductosUpdateToOneWithWhereWithoutListaPvpDetInputObjectSchema: z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutListaPvpDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutListaPvpDetInput>;
export const ProductosUpdateToOneWithWhereWithoutListaPvpDetInputObjectZodSchema = makeSchema();
