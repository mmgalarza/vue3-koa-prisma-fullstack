import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasSelectObjectSchema as ListasSelectObjectSchema } from './objects/ListasSelect.schema';
import { ListasCreateManyInputObjectSchema as ListasCreateManyInputObjectSchema } from './objects/ListasCreateManyInput.schema';

export const ListasCreateManyAndReturnSchema: z.ZodType<Prisma.ListasCreateManyAndReturnArgs> = z.object({ select: ListasSelectObjectSchema.optional(), data: z.union([ ListasCreateManyInputObjectSchema, z.array(ListasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListasCreateManyAndReturnArgs>;

export const ListasCreateManyAndReturnZodSchema = z.object({ select: ListasSelectObjectSchema.optional(), data: z.union([ ListasCreateManyInputObjectSchema, z.array(ListasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();