import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosCreateWithoutRegistroDetInputObjectSchema as ProductosCreateWithoutRegistroDetInputObjectSchema } from './ProductosCreateWithoutRegistroDetInput.schema';
import { ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema as ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedCreateWithoutRegistroDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductosCreateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema)])
}).strict();
export const ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateOrConnectWithoutRegistroDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateOrConnectWithoutRegistroDetInput>;
export const ProductosCreateOrConnectWithoutRegistroDetInputObjectZodSchema = makeSchema();
