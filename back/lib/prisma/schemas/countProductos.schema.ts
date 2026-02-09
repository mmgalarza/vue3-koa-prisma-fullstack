import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosOrderByWithRelationInputObjectSchema as ProductosOrderByWithRelationInputObjectSchema } from './objects/ProductosOrderByWithRelationInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './objects/ProductosWhereInput.schema';
import { ProductosWhereUniqueInputObjectSchema as ProductosWhereUniqueInputObjectSchema } from './objects/ProductosWhereUniqueInput.schema';
import { ProductosCountAggregateInputObjectSchema as ProductosCountAggregateInputObjectSchema } from './objects/ProductosCountAggregateInput.schema';

export const ProductosCountSchema: z.ZodType<Prisma.ProductosCountArgs> = z.object({ orderBy: z.union([ProductosOrderByWithRelationInputObjectSchema, ProductosOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductosWhereInputObjectSchema.optional(), cursor: ProductosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductosCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductosCountArgs>;

export const ProductosCountZodSchema = z.object({ orderBy: z.union([ProductosOrderByWithRelationInputObjectSchema, ProductosOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductosWhereInputObjectSchema.optional(), cursor: ProductosWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductosCountAggregateInputObjectSchema ]).optional() }).strict();