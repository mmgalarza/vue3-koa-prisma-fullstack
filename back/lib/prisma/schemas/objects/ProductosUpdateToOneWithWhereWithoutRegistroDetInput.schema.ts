import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema';
import { ProductosUpdateWithoutRegistroDetInputObjectSchema as ProductosUpdateWithoutRegistroDetInputObjectSchema } from './ProductosUpdateWithoutRegistroDetInput.schema';
import { ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema as ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutRegistroDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductosUpdateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema)])
}).strict();
export const ProductosUpdateToOneWithWhereWithoutRegistroDetInputObjectSchema: z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutRegistroDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutRegistroDetInput>;
export const ProductosUpdateToOneWithWhereWithoutRegistroDetInputObjectZodSchema = makeSchema();
