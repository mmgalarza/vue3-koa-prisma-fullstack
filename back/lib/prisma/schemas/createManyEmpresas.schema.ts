import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasCreateManyInputObjectSchema as EmpresasCreateManyInputObjectSchema } from './objects/EmpresasCreateManyInput.schema';

export const EmpresasCreateManySchema: z.ZodType<Prisma.EmpresasCreateManyArgs> = z.object({ data: z.union([ EmpresasCreateManyInputObjectSchema, z.array(EmpresasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EmpresasCreateManyArgs>;

export const EmpresasCreateManyZodSchema = z.object({ data: z.union([ EmpresasCreateManyInputObjectSchema, z.array(EmpresasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();