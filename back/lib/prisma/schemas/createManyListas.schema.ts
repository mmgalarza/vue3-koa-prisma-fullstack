import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasCreateManyInputObjectSchema as ListasCreateManyInputObjectSchema } from './objects/ListasCreateManyInput.schema';

export const ListasCreateManySchema: z.ZodType<Prisma.ListasCreateManyArgs> = z.object({ data: z.union([ ListasCreateManyInputObjectSchema, z.array(ListasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListasCreateManyArgs>;

export const ListasCreateManyZodSchema = z.object({ data: z.union([ ListasCreateManyInputObjectSchema, z.array(ListasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();