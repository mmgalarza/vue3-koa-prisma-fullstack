import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocCreateManyInputObjectSchema as TiposDocCreateManyInputObjectSchema } from './objects/TiposDocCreateManyInput.schema';

export const TiposDocCreateManySchema: z.ZodType<Prisma.TiposDocCreateManyArgs> = z.object({ data: z.union([ TiposDocCreateManyInputObjectSchema, z.array(TiposDocCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocCreateManyArgs>;

export const TiposDocCreateManyZodSchema = z.object({ data: z.union([ TiposDocCreateManyInputObjectSchema, z.array(TiposDocCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();