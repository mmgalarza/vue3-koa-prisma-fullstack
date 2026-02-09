import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './objects/ListasWhereInput.schema';

export const ListasDeleteManySchema: z.ZodType<Prisma.ListasDeleteManyArgs> = z.object({ where: ListasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasDeleteManyArgs>;

export const ListasDeleteManyZodSchema = z.object({ where: ListasWhereInputObjectSchema.optional() }).strict();