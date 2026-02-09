import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutVentaDetInputObjectSchema as ProductosCreateWithoutVentaDetInputObjectSchema } from './ProductosCreateWithoutVentaDetInput.schema';
import { ProductosUncheckedCreateWithoutVentaDetInputObjectSchema as ProductosUncheckedCreateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedCreateWithoutVentaDetInput.schema';
import { ProductosCreateOrConnectWithoutVentaDetInputObjectSchema as ProductosCreateOrConnectWithoutVentaDetInputObjectSchema } from './ProductosCreateOrConnectWithoutVentaDetInput.schema';
import { ProductosUpsertWithoutVentaDetInputObjectSchema as ProductosUpsertWithoutVentaDetInputObjectSchema } from './ProductosUpsertWithoutVentaDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateToOneWithWhereWithoutVentaDetInputObjectSchema as ProductosUpdateToOneWithWhereWithoutVentaDetInputObjectSchema } from './ProductosUpdateToOneWithWhereWithoutVentaDetInput.schema';
import { ProductosUpdateWithoutVentaDetInputObjectSchema as ProductosUpdateWithoutVentaDetInputObjectSchema } from './ProductosUpdateWithoutVentaDetInput.schema';
import { ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema as ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutVentaDetInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutVentaDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutVentaDetInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductosUpsertWithoutVentaDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductosUpdateToOneWithWhereWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUpdateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema)]).optional()
}).strict();
export const ProductosUpdateOneRequiredWithoutVentaDetNestedInputObjectSchema: z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutVentaDetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutVentaDetNestedInput>;
export const ProductosUpdateOneRequiredWithoutVentaDetNestedInputObjectZodSchema = makeSchema();
