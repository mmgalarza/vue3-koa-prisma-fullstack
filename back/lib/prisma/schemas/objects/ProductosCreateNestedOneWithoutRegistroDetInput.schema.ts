import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutRegistroDetInputObjectSchema as ProductosCreateWithoutRegistroDetInputObjectSchema } from './ProductosCreateWithoutRegistroDetInput.schema';
import { ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema as ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedCreateWithoutRegistroDetInput.schema';
import { ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema as ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema } from './ProductosCreateOrConnectWithoutRegistroDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductosCreateNestedOneWithoutRegistroDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateNestedOneWithoutRegistroDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateNestedOneWithoutRegistroDetInput>;
export const ProductosCreateNestedOneWithoutRegistroDetInputObjectZodSchema = makeSchema();
