import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './objects/ListasDetInclude.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './objects/ListasDetWhereUniqueInput.schema';
import { ListasDetCreateInputObjectSchema as ListasDetCreateInputObjectSchema } from './objects/ListasDetCreateInput.schema';
import { ListasDetUncheckedCreateInputObjectSchema as ListasDetUncheckedCreateInputObjectSchema } from './objects/ListasDetUncheckedCreateInput.schema';
import { ListasDetUpdateInputObjectSchema as ListasDetUpdateInputObjectSchema } from './objects/ListasDetUpdateInput.schema';
import { ListasDetUncheckedUpdateInputObjectSchema as ListasDetUncheckedUpdateInputObjectSchema } from './objects/ListasDetUncheckedUpdateInput.schema';

export const ListasDetUpsertOneSchema: z.ZodType<Prisma.ListasDetUpsertArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), where: ListasDetWhereUniqueInputObjectSchema, create: z.union([ ListasDetCreateInputObjectSchema, ListasDetUncheckedCreateInputObjectSchema ]), update: z.union([ ListasDetUpdateInputObjectSchema, ListasDetUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ListasDetUpsertArgs>;

export const ListasDetUpsertOneZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), where: ListasDetWhereUniqueInputObjectSchema, create: z.union([ ListasDetCreateInputObjectSchema, ListasDetUncheckedCreateInputObjectSchema ]), update: z.union([ ListasDetUpdateInputObjectSchema, ListasDetUncheckedUpdateInputObjectSchema ]) }).strict();