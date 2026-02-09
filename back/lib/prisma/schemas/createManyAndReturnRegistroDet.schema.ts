import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './objects/RegistroDetSelect.schema';
import { RegistroDetCreateManyInputObjectSchema as RegistroDetCreateManyInputObjectSchema } from './objects/RegistroDetCreateManyInput.schema';

export const RegistroDetCreateManyAndReturnSchema: z.ZodType<Prisma.RegistroDetCreateManyAndReturnArgs> = z.object({ select: RegistroDetSelectObjectSchema.optional(), data: z.union([ RegistroDetCreateManyInputObjectSchema, z.array(RegistroDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetCreateManyAndReturnArgs>;

export const RegistroDetCreateManyAndReturnZodSchema = z.object({ select: RegistroDetSelectObjectSchema.optional(), data: z.union([ RegistroDetCreateManyInputObjectSchema, z.array(RegistroDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();