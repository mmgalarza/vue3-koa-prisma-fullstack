import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutVentaDetInputObjectSchema as ProductosCreateWithoutVentaDetInputObjectSchema } from './ProductosCreateWithoutVentaDetInput.schema';
import { ProductosUncheckedCreateWithoutVentaDetInputObjectSchema as ProductosUncheckedCreateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedCreateWithoutVentaDetInput.schema';
import { ProductosCreateOrConnectWithoutVentaDetInputObjectSchema as ProductosCreateOrConnectWithoutVentaDetInputObjectSchema } from './ProductosCreateOrConnectWithoutVentaDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutVentaDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutVentaDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductosCreateNestedOneWithoutVentaDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateNestedOneWithoutVentaDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateNestedOneWithoutVentaDetInput>;
export const ProductosCreateNestedOneWithoutVentaDetInputObjectZodSchema = makeSchema();
