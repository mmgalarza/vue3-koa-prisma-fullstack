import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasCreateManyInputObjectSchema as EmpresasCreateManyInputObjectSchema } from './objects/EmpresasCreateManyInput.schema';

export const EmpresasCreateManyAndReturnSchema: z.ZodType<Prisma.EmpresasCreateManyAndReturnArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), data: z.union([ EmpresasCreateManyInputObjectSchema, z.array(EmpresasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasCreateManyAndReturnArgs>;

export const EmpresasCreateManyAndReturnZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), data: z.union([ EmpresasCreateManyInputObjectSchema, z.array(EmpresasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();