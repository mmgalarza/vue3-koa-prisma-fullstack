import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './objects/ProductosSelect.schema';
import { ProductosIncludeObjectSchema as ProductosIncludeObjectSchema } from './objects/ProductosInclude.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './objects/ProductosWhereUniqueInput.schema';
import { ProductosCreateInputObjectSchema as ProductosCreateInputObjectSchema } from './objects/ProductosCreateInput.schema';
import { ProductosUncheckedCreateInputObjectSchema as ProductosUncheckedCreateInputObjectSchema } from './objects/ProductosUncheckedCreateInput.schema';
import { ProductosUpdateInputObjectSchema as ProductosUpdateInputObjectSchema } from './objects/ProductosUpdateInput.schema';
import { ProductosUncheckedUpdateInputObjectSchema as ProductosUncheckedUpdateInputObjectSchema } from './objects/ProductosUncheckedUpdateInput.schema';

export const ProductosUpsertOneSchema: z.ZodType<Prisma.ProductosUpsertArgs> = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), where: ProductosWhereUniqueInputObjectSchema, create: z.union([ ProductosCreateInputObjectSchema, ProductosUncheckedCreateInputObjectSchema ]), update: z.union([ ProductosUpdateInputObjectSchema, ProductosUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductosUpsertArgs>;

export const ProductosUpsertOneZodSchema = z.object({ select: ProductosSelectObjectSchema.optional(), include: ProductosIncludeObjectSchema.optional(), where: ProductosWhereUniqueInputObjectSchema, create: z.union([ ProductosCreateInputObjectSchema, ProductosUncheckedCreateInputObjectSchema ]), update: z.union([ ProductosUpdateInputObjectSchema, ProductosUncheckedUpdateInputObjectSchema ]) }).strict();