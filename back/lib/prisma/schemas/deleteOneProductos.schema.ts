import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './objects/ProductosSelect.schema';
import { ProductosIncludeObjectSchema as ProductosIncludeObjectSchema } from './objects/ProductosInclude.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './objects/ProductosWhereUniqueInput.schema';

export const ProductosDeleteOneSchema: z.ZodType<Prisma.ProductosDeleteArgs> = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), where: ProductosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductosDeleteArgs>;

export const ProductosDeleteOneZodSchema = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), where: ProductosWhereUniqueInputObjectSchema }).strict();