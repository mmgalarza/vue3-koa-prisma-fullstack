import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCreateWithoutRegistroDetInputObjectSchema as ProductosCreateWithoutRegistroDetInputObjectSchema } from './ProductosCreateWithoutRegistroDetInput.schema';
import { ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema as ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedCreateWithoutRegistroDetInput.schema';
import { ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema as ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema } from './ProductosCreateOrConnectWithoutRegistroDetInput.schema';
import { ProductosUpsertWithoutRegistroDetInputObjectSchema as ProductosUpsertWithoutRegistroDetInputObjectSchema } from './ProductosUpsertWithoutRegistroDetInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './ProductosWhereUniqueInput.schema';
import { ProductosUpdateToOneWithWhereWithoutRegistroDetInputObjectSchema as ProductosUpdateToOneWithWhereWithoutRegistroDetInputObjectSchema } from './ProductosUpdateToOneWithWhereWithoutRegistroDetInput.schema';
import { ProductosUpdateWithoutRegistroDetInputObjectSchema as ProductosUpdateWithoutRegistroDetInputObjectSchema } from './ProductosUpdateWithoutRegistroDetInput.schema';
import { ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema as ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutRegistroDetInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductosCreateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedCreateWithoutRegistroDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductosCreateOrConnectWithoutRegistroDetInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductosUpsertWithoutRegistroDetInputObjectSchema).optional(),
  connect: z.lazy(() => ProductosWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductosUpdateToOneWithWhereWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUpdateWithoutRegistroDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutRegistroDetInputObjectSchema)]).optional()
}).strict();
export const ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectSchema: z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutRegistroDetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateOneRequiredWithoutRegistroDetNestedInput>;
export const ProductosUpdateOneRequiredWithoutRegistroDetNestedInputObjectZodSchema = makeSchema();
