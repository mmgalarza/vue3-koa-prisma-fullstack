import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpUpdateManyMutationInputObjectSchema as ListaPvpUpdateManyMutationInputObjectSchema } from './objects/ListaPvpUpdateManyMutationInput.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './objects/ListaPvpWhereInput.schema';

export const ListaPvpUpdateManySchema: z.ZodType<Prisma.ListaPvpUpdateManyArgs> = z.object({ data: ListaPvpUpdateManyMutationInputObjectSchema, where: ListaPvpWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpUpdateManyArgs>;

export const ListaPvpUpdateManyZodSchema = z.object({ data: ListaPvpUpdateManyMutationInputObjectSchema, where: ListaPvpWhereInputObjectSchema.optional() }).strict();