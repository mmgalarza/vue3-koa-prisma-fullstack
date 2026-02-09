import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './objects/ProductosSelect.schema';
import { ProductosIncludeObjectSchema as ProductosIncludeObjectSchema } from './objects/ProductosInclude.schema';
import { ProductosCreateInputObjectSchema as ProductosCreateInputObjectSchema } from './objects/ProductosCreateInput.schema';
import { ProductosUncheckedCreateInputObjectSchema as ProductosUncheckedCreateInputObjectSchema } from './objects/ProductosUncheckedCreateInput.schema';

export const ProductosCreateOneSchema: z.ZodType<Prisma.ProductosCreateArgs> = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), data: z.union([ProductosCreateInputObjectSchema, ProductosUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductosCreateArgs>;

export const ProductosCreateOneZodSchema = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), data: z.union([ProductosCreateInputObjectSchema, ProductosUncheckedCreateInputObjectSchema]) }).strict();