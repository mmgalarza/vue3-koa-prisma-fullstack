import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutListasDetInputObjectSchema as ProductosCreateWithoutListasDetInputObjectSchema } from './ProductosCreateWithoutListasDetInput.schema';
import { ProductosUncheckedCreateWithoutListasDetInputObjectSchema as ProductosUncheckedCreateWithoutListasDetInputObjectSchema } from './ProductosUncheckedCreateWithoutListasDetInput.schema';
import { ProductosCreateOrConnectWithoutListasDetInputObjectSchema as ProductosCreateOrConnectWithoutListasDetInputObjectSchema } from './ProductosCreateOrConnectWithoutListasDetInput.schema';
import { ProductosUpsertWithoutListasDetInputObjectSchema as ProductosUpsertWithoutListasDetInputObjectSchema } from './ProductosUpsertWithoutListasDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateToOneWithWhereWithoutListasDetInputObjectSchema as ProductosUpdateToOneWithWhereWithoutListasDetInputObjectSchema } from './ProductosUpdateToOneWithWhereWithoutListasDetInput.schema';
import { ProductosUpdateWithoutListasDetInputObjectSchema as ProductosUpdateWithoutListasDetInputObjectSchema } from './ProductosUpdateWithoutListasDetInput.schema';
import { ProductosUncheckedUpdateWithoutListasDetInputObjectSchema as ProductosUncheckedUpdateWithoutListasDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutListasDetInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutListasDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutListasDetInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductosUpsertWithoutListasDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductosUpdateToOneWithWhereWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUpdateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutListasDetInputObjectSchema)]).optional()
}).strict();
export const ProductosUpdateOneRequiredWithoutListasDetNestedInputObjectSchema: z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutListasDetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutListasDetNestedInput>;
export const ProductosUpdateOneRequiredWithoutListasDetNestedInputObjectZodSchema = makeSchema();
