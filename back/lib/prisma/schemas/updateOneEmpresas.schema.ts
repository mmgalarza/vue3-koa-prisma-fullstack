import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './objects/EmpresasInclude.schema';
import { EmpresasUpdateInputObjectSchema as EmpresasUpdateInputObjectSchema } from './objects/EmpresasUpdateInput.schema';
import { EmpresasUncheckedUpdateInputObjectSchema as EmpresasUncheckedUpdateInputObjectSchema } from './objects/EmpresasUncheckedUpdateInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './objects/EmpresasWhereUniqueInput.schema';

export const EmpresasUpdateOneSchema: z.ZodType<Prisma.EmpresasUpdateArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), data: z.union([EmpresasUpdateInputObjectSchema, EmpresasUncheckedUpdateInputObjectSchema]), where: EmpresasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmpresasUpdateArgs>;

export const EmpresasUpdateOneZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), data: z.union([EmpresasUpdateInputObjectSchema, EmpresasUncheckedUpdateInputObjectSchema]), where: EmpresasWhereUniqueInputObjectSchema }).strict();