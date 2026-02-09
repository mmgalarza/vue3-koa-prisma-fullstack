import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './objects/ProductosSelect.schema';
import { ProductosUpdateManyMutationInputObjectSchema as ProductosUpdateManyMutationInputObjectSchema } from './objects/ProductosUpdateManyMutationInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './objects/ProductosWhereInput.schema';

export const ProductosUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductosUpdateManyAndReturnArgs> = z.object({ select: ProductosSelectObjectSchema.optional(), data: ProductosUpdateManyMutationInputObjectSchema, where: ProductosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductosUpdateManyAndReturnArgs>;

export const ProductosUpdateManyAndReturnZodSchema = z.object({ select: ProductosSelectObjectSchema.optional(), data: ProductosUpdateManyMutationInputObjectSchema, where: ProductosWhereInputObjectSchema.optional() }).strict();