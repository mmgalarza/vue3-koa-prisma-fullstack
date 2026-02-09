import type { Prisma } from '../client';
import * as z from 'zod';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './objects/CategoriasWhereInput.schema';

export const CategoriasDeleteManySchema: z.ZodType<Prisma.CategoriasDeleteManyArgs> = z.object({ where: CategoriasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CategoriasDeleteManyArgs>;

export const CategoriasDeleteManyZodSchema = z.object({ where: CategoriasWhereInputObjectSchema.optional() }).strict();