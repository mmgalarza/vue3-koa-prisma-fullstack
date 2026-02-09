import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpSelectObjectSchema as ListaPvpSelectObjectSchema } from './objects/ListaPvpSelect.schema';
import { ListaPvpIncludeObjectSchema as ListaPvpIncludeObjectSchema } from './objects/ListaPvpInclude.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './objects/ListaPvpWhereUniqueInput.schema';

export const ListaPvpFindUniqueOrThrowSchema: z.ZodType<Prisma.ListaPvpFindUniqueOrThrowArgs> = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), where: ListaPvpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListaPvpFindUniqueOrThrowArgs>;

export const ListaPvpFindUniqueOrThrowZodSchema = z.object({ select: ListaPvpSelectObjectSchema.optional(), include: ListaPvpIncludeObjectSchema.optional(), where: ListaPvpWhereUniqueInputObjectSchema }).strict();