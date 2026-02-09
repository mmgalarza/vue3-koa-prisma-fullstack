import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosCreateWithoutVentaDetInputObjectSchema as ProductosCreateWithoutVentaDetInputObjectSchema } from './ProductosCreateWithoutVentaDetInput.schema';
import { ProductosUncheckedCreateWithoutVentaDetInputObjectSchema as ProductosUncheckedCreateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedCreateWithoutVentaDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductosCreateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutVentaDetInputObjectSchema)])
}).strict();
export const ProductosCreateOrConnectWithoutVentaDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateOrConnectWithoutVentaDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateOrConnectWithoutVentaDetInput>;
export const ProductosCreateOrConnectWithoutVentaDetInputObjectZodSchema = makeSchema();
