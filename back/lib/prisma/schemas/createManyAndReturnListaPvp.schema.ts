import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpCreateManyInputObjectSchema as ListaPvpCreateManyInputObjectSchema } from './objects/ListaPvpCreateManyInput.schema';

export const ListaPvpCreateManyAndReturnSchema: z.ZodType<Prisma.ListaPvpCreateManyAndReturnArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), data: z.union([ ListaPvpCreateManyInputObjectSchema, z.array(ListaPvpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpCreateManyAndReturnArgs>;

export const ListaPvpCreateManyAndReturnZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), data: z.union([ ListaPvpCreateManyInputObjectSchema, z.array(ListaPvpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();