import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasCreateManyInputObjectSchema as CategoriasCreateManyInputObjectSchema } from './objects/CategoriasCreateManyInput.schema';

export const CategoriasCreateManySchema: z.ZodType<Prisma.CategoriasCreateManyArgs> = z.object({ data: z.union([ CategoriasCreateManyInputObjectSchema, z.array(CategoriasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasCreateManyArgs>;

export const CategoriasCreateManyZodSchema = z.object({ data: z.union([ CategoriasCreateManyInputObjectSchema, z.array(CategoriasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();