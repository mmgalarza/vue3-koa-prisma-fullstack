import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './objects/CategoriasInclude.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './objects/CategoriasWhereUniqueInput.schema';

export const CategoriasDeleteOneSchema: z.ZodType<Prisma.CategoriasDeleteArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), where: CategoriasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoriasDeleteArgs>;

export const CategoriasDeleteOneZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), where: CategoriasWhereUniqueInputObjectSchema }).strict();