import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './objects/ListaPvpInclude.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './objects/ListaPvpWhereUniqueInput.schema';

export const ListaPvpFindUniqueSchema: z.ZodType<Prisma.ListaPvpFindUniqueArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), where: ListaPvpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListaPvpFindUniqueArgs>;

export const ListaPvpFindUniqueZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), where: ListaPvpWhereUniqueInputObjectSchema }).strict();