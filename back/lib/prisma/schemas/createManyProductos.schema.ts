import type { Prisma } from '../client';
import * as z from 'zod';
import { ProductosCreateManyInputObjectSchema as ProductosCreateManyInputObjectSchema } from './objects/ProductosCreateManyInput.schema';

export const ProductosCreateManySchema: z.ZodType<Prisma.ProductosCreateManyArgs> = z.object({ data: z.union([ ProductosCreateManyInputObjectSchema, z.array(ProductosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductosCreateManyArgs>;

export const ProductosCreateManyZodSchema = z.object({ data: z.union([ ProductosCreateManyInputObjectSchema, z.array(ProductosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();