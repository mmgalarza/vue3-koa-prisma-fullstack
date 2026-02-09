import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetCreateManyInputObjectSchema as RegistroDetCreateManyInputObjectSchema } from './objects/RegistroDetCreateManyInput.schema';

export const RegistroDetCreateManySchema: z.ZodType<Prisma.RegistroDetCreateManyArgs> = z.object({ data: z.union([ RegistroDetCreateManyInputObjectSchema, z.array(RegistroDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetCreateManyArgs>;

export const RegistroDetCreateManyZodSchema = z.object({ data: z.union([ RegistroDetCreateManyInputObjectSchema, z.array(RegistroDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();