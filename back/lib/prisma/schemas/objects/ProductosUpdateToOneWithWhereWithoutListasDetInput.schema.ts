import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './ProductosWhereInput.schema';
import { ProductosUpdateWithoutListasDetInputObjectSchema as ProductosUpdateWithoutListasDetInputObjectSchema } from './ProductosUpdateWithoutListasDetInput.schema';
import { ProductosUncheckedUpdateWithoutListasDetInputObjectSchema as ProductosUncheckedUpdateWithoutListasDetInputObjectSchema } from './ProductosUncheckedUpdateWithoutListasDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductosUpdateWithoutListasDetInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateWithoutListasDetInputObjectSchema)])
}).strict();
export const ProductosUpdateToOneWithWhereWithoutListasDetInputObjectSchema: z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutListasDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateToOneWithWhereWithoutListasDetInput>;
export const ProductosUpdateToOneWithWhereWithoutListasDetInputObjectZodSchema = makeSchema();
