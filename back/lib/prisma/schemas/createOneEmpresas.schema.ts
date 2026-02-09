import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './objects/EmpresasInclude.schema';
import { EmpresasCreateInputObjectSchema as EmpresasCreateInputObjectSchema } from './objects/EmpresasCreateInput.schema';
import { EmpresasUncheckedCreateInputObjectSchema as EmpresasUncheckedCreateInputObjectSchema } from './objects/EmpresasUncheckedCreateInput.schema';

export const EmpresasCreateOneSchema: z.ZodType<Prisma.EmpresasCreateArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), data: z.union([EmpresasCreateInputObjectSchema, EmpresasUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EmpresasCreateArgs>;

export const EmpresasCreateOneZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), data: z.union([EmpresasCreateInputObjectSchema, EmpresasUncheckedCreateInputObjectSchema]) }).strict();