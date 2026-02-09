import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './objects/ProductosSelect.schema';
import { ProductosIncludeObjectSchema as ProductosIncludeObjectSchema } from './objects/ProductosInclude.schema';
import { ProductosUpdateInputObjectSchema as ProductosUpdateInputObjectSchema } from './objects/ProductosUpdateInput.schema';
import { ProductosUncheckedUpdateInputObjectSchema as ProductosUncheckedUpdateInputObjectSchema } from './objects/ProductosUncheckedUpdateInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './objects/ProductosWhereUniqueInput.schema';

export const ProductosUpdateOneSchema: z.ZodType<Prisma.ProductosUpdateArgs> = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), data: z.union([ProductosUpdateInputObjectSchema, ProductosUncheckedUpdateInputObjectSchema]), where: ProductosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductosUpdateArgs>;

export const ProductosUpdateOneZodSchema = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), data: z.union([ProductosUpdateInputObjectSchema, ProductosUncheckedUpdateInputObjectSchema]), where: ProductosWhereUniqueInputObjectSchema }).strict();