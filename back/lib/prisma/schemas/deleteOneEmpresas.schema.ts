import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './objects/EmpresasInclude.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './objects/EmpresasWhereUniqueInput.schema';

export const EmpresasDeleteOneSchema: z.ZodType<Prisma.EmpresasDeleteArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), where: EmpresasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmpresasDeleteArgs>;

export const EmpresasDeleteOneZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), where: EmpresasWhereUniqueInputObjectSchema }).strict();