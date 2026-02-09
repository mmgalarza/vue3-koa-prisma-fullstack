import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosUpdateWithoutRegistroDetInputObjectSchema as ProductosUpdateWithoutRegistroDetInputObjectSchema } from './ProductosUpdateWithoutRegistroDetInput.schema';
import { ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema as ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutRegistroDetInput.schema';
import { ProductosCreateWithoutRegistroDetInputObjectSchema as ProductosCreateWithoutRegistroDetInputObjectSchema } from './ProductosCreateWithoutRegistroDetInput.schema';
import { ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema as ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedCreateWithoutRegistroDetInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductosUpdateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductosCreateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema)]),
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const ProductosUpsertWithoutRegistroDetInputObjectSchema: z.ZodType<Prisma.ProductosUpsertWithoutRegistroDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpsertWithoutRegistroDetInput>;
export const ProductosUpsertWithoutRegistroDetInputObjectZodSchema = makeSchema();
