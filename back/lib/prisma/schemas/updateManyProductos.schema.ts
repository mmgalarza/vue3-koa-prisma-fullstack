import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosUpdateManyMutationInputObjectSchema as ProductosUpdateManyMutationInputObjectSchema } from './objects/ProductosUpdateManyMutationInput.schema';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './objects/ProductosWhereInput.schema';

export const ProductosUpdateManySchema: z.ZodType<Prisma.ProductosUpdateManyArgs> = z.object({ data: ProductosUpdateManyMutationInputObjectSchema, where: ProductosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductosUpdateManyArgs>;

export const ProductosUpdateManyZodSchema = z.object({ data: ProductosUpdateManyMutationInputObjectSchema, where: ProductosWhereInputObjectSchema.optional() }).strict();