import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './objects/CategoriasInclude.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './objects/CategoriasWhereUniqueInput.schema';

export const CategoriasFindUniqueOrThrowSchema: z.ZodType<Prisma.CategoriasFindUniqueOrThrowArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), where: CategoriasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoriasFindUniqueOrThrowArgs>;

export const CategoriasFindUniqueOrThrowZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), where: CategoriasWhereUniqueInputObjectSchema }).strict();