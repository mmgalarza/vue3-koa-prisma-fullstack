import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './objects/ListasDetWhereInput.schema';

export const ListasDetDeleteManySchema: z.ZodType<Prisma.ListasDetDeleteManyArgs> = z.object({ where: ListasDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetDeleteManyArgs>;

export const ListasDetDeleteManyZodSchema = z.object({ where: ListasDetWhereInputObjectSchema.optional() }).strict();