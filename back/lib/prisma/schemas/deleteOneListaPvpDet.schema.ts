import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './objects/ListaPvpDetSelect.schema';
import { ListaPvpDetIncludeObjectSchema as ListaPvpDetIncludeObjectSchema } from './objects/ListaPvpDetInclude.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './objects/ListaPvpDetWhereUniqueInput.schema';

export const ListaPvpDetDeleteOneSchema: z.ZodType<Prisma.ListaPvpDetDeleteArgs> = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), where: ListaPvpDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetDeleteArgs>;

export const ListaPvpDetDeleteOneZodSchema = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), where: ListaPvpDetWhereUniqueInputObjectSchema }).strict();