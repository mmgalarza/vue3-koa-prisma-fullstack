import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema';
import { ProductosUpdateWithoutVentaDetInputObjectSchema as ProductosUpdateWithoutVentaDetInputObjectSchema } from './ProductosUpdateWithoutVentaDetInput.schema';
import { ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema as ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutVentaDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductosUpdateWithoutVentaDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutVentaDetInputObjectSchema)])
}).strict();
export const ProductosUpdateToOneWithWhereWithoutVentaDetInputObjectSchema: z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutVentaDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutVentaDetInput>;
export const ProductosUpdateToOneWithWhereWithoutVentaDetInputObjectZodSchema = makeSchema();
