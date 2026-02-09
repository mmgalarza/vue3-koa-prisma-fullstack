import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpUpdateManyMutationInputObjectSchema as ListaPvpUpdateManyMutationInputObjectSchema } from './objects/ListaPvpUpdateManyMutationInput.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './objects/ListaPvpWhereInput.schema';

export const ListaPvpUpdateManyAndReturnSchema: z.ZodType<Prisma.ListaPvpUpdateManyAndReturnArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), data: ListaPvpUpdateManyMutationInputObjectSchema, where: ListaPvpWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpUpdateManyAndReturnArgs>;

export const ListaPvpUpdateManyAndReturnZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), data: ListaPvpUpdateManyMutationInputObjectSchema, where: ListaPvpWhereInputObjectSchema.optional() }).strict();