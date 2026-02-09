import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasSelectObjectSchema as CategoriasSelectObjectSchema } from './objects/CategoriasSelect.schema';
import { CategoriasUpdateManyMutationInputObjectSchema as CategoriasUpdateManyMutationInputObjectSchema } from './objects/CategoriasUpdateManyMutationInput.schema';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './objects/CategoriasWhereInput.schema';

export const CategoriasUpdateManyAndReturnSchema: z.ZodType<Prisma.CategoriasUpdateManyAndReturnArgs> = z.object({ select: CategoriasSelectObjectSchema.optional(), data: CategoriasUpdateManyMutationInputObjectSchema, where: CategoriasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasUpdateManyAndReturnArgs>;

export const CategoriasUpdateManyAndReturnZodSchema = z.object({ select: CategoriasSelectObjectSchema.optional(), data: CategoriasUpdateManyMutationInputObjectSchema, where: CategoriasWhereInputObjectSchema.optional() }).strict();