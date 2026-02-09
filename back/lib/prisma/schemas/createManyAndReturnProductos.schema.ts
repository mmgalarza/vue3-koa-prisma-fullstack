import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosSelectObjectSchema as ProductosSelectObjectSchema } from './objects/ProductosSelect.schema';
import { ProductosCreateManyInputObjectSchema as ProductosCreateManyInputObjectSchema } from './objects/ProductosCreateManyInput.schema';

export const ProductosCreateManyAndReturnSchema: z.ZodType<Prisma.ProductosCreateManyAndReturnArgs> = z.object({ select: ProductosSelectObjectSchema.optional(), data: z.union([ ProductosCreateManyInputObjectSchema, z.array(ProductosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductosCreateManyAndReturnArgs>;

export const ProductosCreateManyAndReturnZodSchema = z.object({ select: ProductosSelectObjectSchema.optional(), data: z.union([ ProductosCreateManyInputObjectSchema, z.array(ProductosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();