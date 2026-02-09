import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosCreateWithoutListasDetInputObjectSchema as ProductosCreateWithoutListasDetInputObjectSchema } from './ProductosCreateWithoutListasDetInput.schema';
import { ProductosUncheckedCreateWithoutListasDetInputObjectSchema as ProductosUncheckedCreateWithoutListasDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListasDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductosCreateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListasDetInputObjectSchema)])
}).strict();
export const ProductosCreateOrConnectWithoutListasDetInputObjectSchema: z.ZodType<Prisma.ProductosCreateOrConnectWithoutListasDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCreateOrConnectWithoutListasDetInput>;
export const ProductosCreateOrConnectWithoutListasDetInputObjectZodSchema = makeSchema();
