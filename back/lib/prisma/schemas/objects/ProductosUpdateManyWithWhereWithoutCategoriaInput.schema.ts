import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosScalarWhereInputObjectSchema as ProductosScalarWhereInputObjectSchema } from './ProductosScalarWhereInput.schema';
import { ProductosUpdateManyMutationInputObjectSchema as ProductosUpdateManyMutationInputObjectSchema } from './ProductosUpdateManyMutationInput.schema';
import { ProductosUncheckedUpdateManyWithoutCategoriaInputObjectSchema as ProductosUncheckedUpdateManyWithoutCategoriaInputObjectSchema } from './ProductosUncheckedUpdateManyWithoutCategoriaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductosScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductosUpdateManyMutationInputObjectSchema), z.lazy(() => ProductosUncheckedUpdateManyWithoutCategoriaInputObjectSchema)])
}).strict();
export const ProductosUpdateManyWithWhereWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductosUpdateManyWithWhereWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateManyWithWhereWithoutCategoriaInput>;
export const ProductosUpdateManyWithWhereWithoutCategoriaInputObjectZodSchema = makeSchema();
