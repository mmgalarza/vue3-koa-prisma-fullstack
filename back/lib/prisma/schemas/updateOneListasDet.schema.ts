import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './objects/ListasDetInclude.schema';
import { ListasDetUpdateInputObjectSchema as ListasDetUpdateInputObjectSchema } from './objects/ListasDetUpdateInput.schema';
import { ListasDetUncheckedUpdateInputObjectSchema as ListasDetUncheckedUpdateInputObjectSchema } from './objects/ListasDetUncheckedUpdateInput.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './objects/ListasDetWhereUniqueInput.schema';

export const ListasDetUpdateOneSchema: z.ZodType<Prisma.ListasDetUpdateArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), data: z.union([ListasDetUpdateInputObjectSchema, ListasDetUncheckedUpdateInputObjectSchema]), where: ListasDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ListasDetUpdateArgs>;

export const ListasDetUpdateOneZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), data: z.union([ListasDetUpdateInputObjectSchema, ListasDetUncheckedUpdateInputObjectSchema]), where: ListasDetWhereUniqueInputObjectSchema }).strict();