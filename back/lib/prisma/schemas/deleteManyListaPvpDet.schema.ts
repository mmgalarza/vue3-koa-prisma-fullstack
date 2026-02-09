import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './objects/ListaPvpDetWhereInput.schema';

export const ListaPvpDetDeleteManySchema: z.ZodType<Prisma.ListaPvpDetDeleteManyArgs> = z.object({ where: ListaPvpDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetDeleteManyArgs>;

export const ListaPvpDetDeleteManyZodSchema = z.object({ where: ListaPvpDetWhereInputObjectSchema.optional() }).strict();