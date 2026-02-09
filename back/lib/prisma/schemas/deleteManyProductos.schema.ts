import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosWhereInputObjectSchema as ProductosWhereInputObjectSchema } from './objects/ProductosWhereInput.schema';

export const ProductosDeleteManySchema: z.ZodType<Prisma.ProductosDeleteManyArgs> = z.object({ where: ProductosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductosDeleteManyArgs>;

export const ProductosDeleteManyZodSchema = z.object({ where: ProductosWhereInputObjectSchema.optional() }).strict();