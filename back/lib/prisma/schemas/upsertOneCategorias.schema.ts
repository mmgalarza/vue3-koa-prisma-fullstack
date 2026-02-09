import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './objects/CategoriasInclude.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './objects/CategoriasWhereUniqueInput.schema';
import { CategoriasCreateInputObjectSchema as CategoriasCreateInputObjectSchema } from './objects/CategoriasCreateInput.schema';
import { CategoriasUncheckedCreateInputObjectSchema as CategoriasUncheckedCreateInputObjectSchema } from './objects/CategoriasUncheckedCreateInput.schema';
import { CategoriasUpdateInputObjectSchema as CategoriasUpdateInputObjectSchema } from './objects/CategoriasUpdateInput.schema';
import { CategoriasUncheckedUpdateInputObjectSchema as CategoriasUncheckedUpdateInputObjectSchema } from './objects/CategoriasUncheckedUpdateInput.schema';

export const CategoriasUpsertOneSchema: z.ZodType<Prisma.CategoriasUpsertArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), where: CategoriasWhereUniqueInputObjectSchema, create: z.union([ CategoriasCreateInputObjectSchema, CategoriasUncheckedCreateInputObjectSchema ]), update: z.union([ CategoriasUpdateInputObjectSchema, CategoriasUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CategoriasUpsertArgs>;

export const CategoriasUpsertOneZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), where: CategoriasWhereUniqueInputObjectSchema, create: z.union([ CategoriasCreateInputObjectSchema, CategoriasUncheckedCreateInputObjectSchema ]), update: z.union([ CategoriasUpdateInputObjectSchema, CategoriasUncheckedUpdateInputObjectSchema ]) }).strict();