import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './objects/CategoriasInclude.schema';
import { CategoriasUpdateInputObjectSchema as CategoriasUpdateInputObjectSchema } from './objects/CategoriasUpdateInput.schema';
import { CategoriasUncheckedUpdateInputObjectSchema as CategoriasUncheckedUpdateInputObjectSchema } from './objects/CategoriasUncheckedUpdateInput.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './objects/CategoriasWhereUniqueInput.schema';

export const CategoriasUpdateOneSchema: z.ZodType<Prisma.CategoriasUpdateArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), data: z.union([CategoriasUpdateInputObjectSchema, CategoriasUncheckedUpdateInputObjectSchema]), where: CategoriasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoriasUpdateArgs>;

export const CategoriasUpdateOneZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), data: z.union([CategoriasUpdateInputObjectSchema, CategoriasUncheckedUpdateInputObjectSchema]), where: CategoriasWhereUniqueInputObjectSchema }).strict();