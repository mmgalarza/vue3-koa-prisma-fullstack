import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './objects/ListaPvpDetSelect.schema';
import { ListaPvpDetIncludeObjectSchema as ListaPvpDetIncludeObjectSchema } from './objects/ListaPvpDetInclude.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './objects/ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetCreateInputObjectSchema as ListaPvpDetCreateInputObjectSchema } from './objects/ListaPvpDetCreateInput.schema';
import { ListaPvpDetUncheckedCreateInputObjectSchema as ListaPvpDetUncheckedCreateInputObjectSchema } from './objects/ListaPvpDetUncheckedCreateInput.schema';
import { ListaPvpDetUpdateInputObjectSchema as ListaPvpDetUpdateInputObjectSchema } from './objects/ListaPvpDetUpdateInput.schema';
import { ListaPvpDetUncheckedUpdateInputObjectSchema as ListaPvpDetUncheckedUpdateInputObjectSchema } from './objects/ListaPvpDetUncheckedUpdateInput.schema';

export const ListaPvpDetUpsertOneSchema: z.ZodType<Prisma.ListaPvpDetUpsertArgs> = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), where: ListaPvpDetWhereUniqueInputObjectSchema, create: z.union([ ListaPvpDetCreateInputObjectSchema, ListaPvpDetUncheckedCreateInputObjectSchema ]), update: z.union([ ListaPvpDetUpdateInputObjectSchema, ListaPvpDetUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetUpsertArgs>;

export const ListaPvpDetUpsertOneZodSchema = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), where: ListaPvpDetWhereUniqueInputObjectSchema, create: z.union([ ListaPvpDetCreateInputObjectSchema, ListaPvpDetUncheckedCreateInputObjectSchema ]), update: z.union([ ListaPvpDetUpdateInputObjectSchema, ListaPvpDetUncheckedUpdateInputObjectSchema ]) }).strict();