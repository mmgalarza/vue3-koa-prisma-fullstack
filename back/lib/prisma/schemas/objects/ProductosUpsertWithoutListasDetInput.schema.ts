import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosUpdateWithoutListasDetInputObjectSchema as ProductosUpdateWithoutListasDetInputObjectSchema } from './ProductosUpdateWithoutListasDetInput.schema';
import { ProductosUncheckedUpdateWithoutListasDetInputObjectSchema as ProductosUncheckedUpdateWithoutListasDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutListasDetInput.schema';
import { ProductosCreateWithoutListasDetInputObjectSchema as ProductosCreateWithoutListasDetInputObjectSchema } from './ProductosCreateWithoutListasDetInput.schema';
import { ProductosUncheckedCreateWithoutListasDetInputObjectSchema as ProductosUncheckedCreateWithoutListasDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListasDetInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductosUpdateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutListasDetInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductosCreateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListasDetInputObjectSchema)]),
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional()
}).strict();
export const ProductosUpsertWithoutListasDetInputObjectSchema: z.ZodType<Prisma.ProductosUpsertWithoutListasDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpsertWithoutListasDetInput>;
export const ProductosUpsertWithoutListasDetInputObjectZodSchema = makeSchema();
