import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroCreateManyInputObjectSchema as RegistroCreateManyInputObjectSchema } from './objects/RegistroCreateManyInput.schema';

export const RegistroCreateManySchema: z.ZodType<Prisma.RegistroCreateManyArgs> = z.object({ data: z.union([ RegistroCreateManyInputObjectSchema, z.array(RegistroCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RegistroCreateManyArgs>;

export const RegistroCreateManyZodSchema = z.object({ data: z.union([ RegistroCreateManyInputObjectSchema, z.array(RegistroCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();