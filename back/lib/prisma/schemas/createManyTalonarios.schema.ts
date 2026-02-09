import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosCreateManyInputObjectSchema as TalonariosCreateManyInputObjectSchema } from './objects/TalonariosCreateManyInput.schema';

export const TalonariosCreateManySchema: z.ZodType<Prisma.TalonariosCreateManyArgs> = z.object({ data: z.union([ TalonariosCreateManyInputObjectSchema, z.array(TalonariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosCreateManyArgs>;

export const TalonariosCreateManyZodSchema = z.object({ data: z.union([ TalonariosCreateManyInputObjectSchema, z.array(TalonariosCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();