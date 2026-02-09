import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutListasDetInputObjectSchema as ProductosCreateWithoutListasDetInputObjectSchema } from './ProductosCreateWithoutListasDetInput.schema';
import { ProductosUncheckedCreateWithoutListasDetInputObjectSchema as ProductosUncheckedCreateWithoutListasDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListasDetInput.schema';
import { ProductosCreateOrConnectWithoutListasDetInputObjectSchema as ProductosCreateOrConnectWithoutListasDetInputObjectSchema } from './ProductosCreateOrConnectWithoutListasDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListasDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutListasDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductosCreateNestedOneWithoutListasDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateNestedOneWithoutListasDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateNestedOneWithoutListasDetInput>;
export const ProductosCreateNestedOneWithoutListasDetInputObjectZodSchema = makeSchema();
