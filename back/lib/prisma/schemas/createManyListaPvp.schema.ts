import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpCreateManyInputObjectSchema as ListaPvpCreateManyInputObjectSchema } from './objects/ListaPvpCreateManyInput.schema';

export const ListaPvpCreateManySchema: z.ZodType<Prisma.ListaPvpCreateManyArgs> = z.object({ data: z.union([ ListaPvpCreateManyInputObjectSchema, z.array(ListaPvpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpCreateManyArgs>;

export const ListaPvpCreateManyZodSchema = z.object({ data: z.union([ ListaPvpCreateManyInputObjectSchema, z.array(ListaPvpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();