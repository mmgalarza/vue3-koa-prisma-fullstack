import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasUpdateManyMutationInputObjectSchema as CategoriasUpdateManyMutationInputObjectSchema } from './objects/CategoriasUpdateManyMutationInput.schema';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './objects/CategoriasWhereInput.schema';

export const CategoriasUpdateManySchema: z.ZodType<Prisma.CategoriasUpdateManyArgs> = z.object({ data: CategoriasUpdateManyMutationInputObjectSchema, where: CategoriasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasUpdateManyArgs>;

export const CategoriasUpdateManyZodSchema = z.object({ data: CategoriasUpdateManyMutationInputObjectSchema, where: CategoriasWhereInputObjectSchema.optional() }).strict();