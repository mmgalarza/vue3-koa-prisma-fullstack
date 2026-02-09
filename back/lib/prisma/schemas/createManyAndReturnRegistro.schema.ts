import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './objects/RegistroSelect.schema';
import { RegistroCreateManyInputObjectSchema as RegistroCreateManyInputObjectSchema } from './objects/RegistroCreateManyInput.schema';

export const RegistroCreateManyAndReturnSchema: z.ZodType<Prisma.RegistroCreateManyAndReturnArgs> = z.object({ select: RegistroSelectObjectSchema.optional(), data: z.union([ RegistroCreateManyInputObjectSchema, z.array(RegistroCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RegistroCreateManyAndReturnArgs>;

export const RegistroCreateManyAndReturnZodSchema = z.object({ select: RegistroSelectObjectSchema.optional(), data: z.union([ RegistroCreateManyInputObjectSchema, z.array(RegistroCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();