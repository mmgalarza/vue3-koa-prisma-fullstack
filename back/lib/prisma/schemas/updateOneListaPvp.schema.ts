import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './objects/ListaPvpInclude.schema';
import { ListaPvpUpdateInputObjectSchema as ListaPvpUpdateInputObjectSchema } from './objects/ListaPvpUpdateInput.schema';
import { ListaPvpUncheckedUpdateInputObjectSchema as ListaPvpUncheckedUpdateInputObjectSchema } from './objects/ListaPvpUncheckedUpdateInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './objects/ListaPvpWhereUniqueInput.schema';

export const ListaPvpUpdateOneSchema: z.ZodType<Prisma.ListaPvpUpdateArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), data: z.union([ListaPvpUpdateInputObjectSchema, ListaPvpUncheckedUpdateInputObjectSchema]), where: ListaPvpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListaPvpUpdateArgs>;

export const ListaPvpUpdateOneZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), data: z.union([ListaPvpUpdateInputObjectSchema, ListaPvpUncheckedUpdateInputObjectSchema]), where: ListaPvpWhereUniqueInputObjectSchema }).strict();