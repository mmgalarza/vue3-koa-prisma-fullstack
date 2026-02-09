import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasIncludeObjectSchema as CategoriasIncludeObjectSchema } from './objects/CategoriasInclude.schema';
import { CategoriasCreateInputObjectSchema as CategoriasCreateInputObjectSchema } from './objects/CategoriasCreateInput.schema';
import { CategoriasUncheckedCreateInputObjectSchema as CategoriasUncheckedCreateInputObjectSchema } from './objects/CategoriasUncheckedCreateInput.schema';

export const CategoriasCreateOneSchema: z.ZodType<Prisma.CategoriasCreateArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), data: z.union([CategoriasCreateInputObjectSchema, CategoriasUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CategoriasCreateArgs>;

export const CategoriasCreateOneZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), include: CategoriasIncludeObjectSchema.optional(), data: z.union([CategoriasCreateInputObjectSchema, CategoriasUncheckedCreateInputObjectSchema]) }).strict();