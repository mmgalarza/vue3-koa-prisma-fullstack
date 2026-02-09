import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosCreateManyInputObjectSchema as TalonariosCreateManyInputObjectSchema } from './objects/TalonariosCreateManyInput.schema';

export const TalonariosCreateManyAndReturnSchema: z.ZodType<Prisma.TalonariosCreateManyAndReturnArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), data: z.union([ TalonariosCreateManyInputObjectSchema, z.array(TalonariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosCreateManyAndReturnArgs>;

export const TalonariosCreateManyAndReturnZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), data: z.union([ TalonariosCreateManyInputObjectSchema, z.array(TalonariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();