import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './objects/ListaPvpDetSelect.schema';
import { ListaPvpDetIncludeObjectSchema as ListaPvpDetIncludeObjectSchema } from './objects/ListaPvpDetInclude.schema';
import { ListaPvpDetUpdateInputObjectSchema as ListaPvpDetUpdateInputObjectSchema } from './objects/ListaPvpDetUpdateInput.schema';
import { ListaPvpDetUncheckedUpdateInputObjectSchema as ListaPvpDetUncheckedUpdateInputObjectSchema } from './objects/ListaPvpDetUncheckedUpdateInput.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './objects/ListaPvpDetWhereUniqueInput.schema';

export const ListaPvpDetUpdateOneSchema: z.ZodType<Prisma.ListaPvpDetUpdateArgs> = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), data: z.union([ListaPvpDetUpdateInputObjectSchema, ListaPvpDetUncheckedUpdateInputObjectSchema]), where: ListaPvpDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateArgs>;

export const ListaPvpDetUpdateOneZodSchema = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), data: z.union([ListaPvpDetUpdateInputObjectSchema, ListaPvpDetUncheckedUpdateInputObjectSchema]), where: ListaPvpDetWhereUniqueInputObjectSchema }).strict();