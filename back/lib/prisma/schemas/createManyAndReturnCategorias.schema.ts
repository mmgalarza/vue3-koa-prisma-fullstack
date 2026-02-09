import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasCreateManyInputObjectSchema as CategoriasCreateManyInputObjectSchema } from './objects/CategoriasCreateManyInput.schema';

export const CategoriasCreateManyAndReturnSchema: z.ZodType<Prisma.CategoriasCreateManyAndReturnArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), data: z.union([ CategoriasCreateManyInputObjectSchema, z.array(CategoriasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasCreateManyAndReturnArgs>;

export const CategoriasCreateManyAndReturnZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), data: z.union([ CategoriasCreateManyInputObjectSchema, z.array(CategoriasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();