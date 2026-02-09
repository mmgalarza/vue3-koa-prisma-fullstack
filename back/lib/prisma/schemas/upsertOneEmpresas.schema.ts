import type { Prisma } from '../client';
import * as z from 'zod';
import { EmpresasSelectObjectSchema as EmpresasSelectObjectSchema } from './objects/EmpresasSelect.schema';
import { EmpresasIncludeObjectSchema as EmpresasIncludeObjectSchema } from './objects/EmpresasInclude.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './objects/EmpresasWhereUniqueInput.schema';
import { EmpresasCreateInputObjectSchema as EmpresasCreateInputObjectSchema } from './objects/EmpresasCreateInput.schema';
import { EmpresasUncheckedCreateInputObjectSchema as EmpresasUncheckedCreateInputObjectSchema } from './objects/EmpresasUncheckedCreateInput.schema';
import { EmpresasUpdateInputObjectSchema as EmpresasUpdateInputObjectSchema } from './objects/EmpresasUpdateInput.schema';
import { EmpresasUncheckedUpdateInputObjectSchema as EmpresasUncheckedUpdateInputObjectSchema } from './objects/EmpresasUncheckedUpdateInput.schema';

export const EmpresasUpsertOneSchema: z.ZodType<Prisma.EmpresasUpsertArgs> = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), where: EmpresasWhereUniqueInputObjectSchema, create: z.union([ EmpresasCreateInputObjectSchema, EmpresasUncheckedCreateInputObjectSchema ]), update: z.union([ EmpresasUpdateInputObjectSchema, EmpresasUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EmpresasUpsertArgs>;

export const EmpresasUpsertOneZodSchema = z.object({ select: EmpresasSelectObjectSchema.optional(), include: EmpresasIncludeObjectSchema.optional(), where: EmpresasWhereUniqueInputObjectSchema, create: z.union([ EmpresasCreateInputObjectSchema, EmpresasUncheckedCreateInputObjectSchema ]), update: z.union([ EmpresasUpdateInputObjectSchema, EmpresasUncheckedUpdateInputObjectSchema ]) }).strict();