import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './objects/ListaPvpWhereInput.schema';

export const ListaPvpDeleteManySchema: z.ZodType<Prisma.ListaPvpDeleteManyArgs> = z.object({ where: ListaPvpWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDeleteManyArgs>;

export const ListaPvpDeleteManyZodSchema = z.object({ where: ListaPvpWhereInputObjectSchema.optional() }).strict();