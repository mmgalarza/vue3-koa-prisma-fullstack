import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosUpdateWithoutVentaDetInputObjectSchema as ProductosUpdateWithoutVentaDetInputObjectSchema } from './ProductosUpdateWithoutVentaDetInput.schema';
import { ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema as ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutVentaDetInput.schema';
import { ProductosCreateWithoutVentaDetInputObjectSchema as ProductosCreateWithoutVentaDetInputObjectSchema } from './ProductosCreateWithoutVentaDetInput.schema';
import { ProductosUncheckedCreateWithoutVentaDetInputObjectSchema as ProductosUncheckedCreateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedCreateWithoutVentaDetInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductosUpdateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductosCreateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutVentaDetInputObjectSchema)]),
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const ProductosUpsertWithoutVentaDetInputObjectSchema: z.ZodType<Prisma.ProductosUpsertWithoutVentaDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpsertWithoutVentaDetInput>;
export const ProductosUpsertWithoutVentaDetInputObjectZodSchema = makeSchema();
