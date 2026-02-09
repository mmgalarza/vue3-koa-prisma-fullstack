import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocSelectObjectSchema as TiposDocSelectObjectSchema } from './objects/TiposDocSelect.schema';
import { TiposDocCreateManyInputObjectSchema as TiposDocCreateManyInputObjectSchema } from './objects/TiposDocCreateManyInput.schema';

export const TiposDocCreateManyAndReturnSchema: z.ZodType<Prisma.TiposDocCreateManyAndReturnArgs> = z.object({ select: TiposDocSelectObjectSchema.optional(), data: z.union([ TiposDocCreateManyInputObjectSchema, z.array(TiposDocCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocCreateManyAndReturnArgs>;

export const TiposDocCreateManyAndReturnZodSchema = z.object({ select: TiposDocSelectObjectSchema.optional(), data: z.union([ TiposDocCreateManyInputObjectSchema, z.array(TiposDocCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();