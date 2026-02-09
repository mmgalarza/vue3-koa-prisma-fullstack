import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './objects/ProveedoresSelect.schema';
import { ProveedoresIncludeObjectSchema as ProveedoresIncludeObjectSchema } from './objects/ProveedoresInclude.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './objects/ProveedoresWhereUniqueInput.schema';
import { ProveedoresCreateInputObjectSchema as ProveedoresCreateInputObjectSchema } from './objects/ProveedoresCreateInput.schema';
import { ProveedoresUncheckedCreateInputObjectSchema as ProveedoresUncheckedCreateInputObjectSchema } from './objects/ProveedoresUncheckedCreateInput.schema';
import { ProveedoresUpdateInputObjectSchema as ProveedoresUpdateInputObjectSchema } from './objects/ProveedoresUpdateInput.schema';
import { ProveedoresUncheckedUpdateInputObjectSchema as ProveedoresUncheckedUpdateInputObjectSchema } from './objects/ProveedoresUncheckedUpdateInput.schema';

export const ProveedoresUpsertOneSchema: z.ZodType<Prisma.ProveedoresUpsertArgs> = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), where: ProveedoresWhereUniqueInputObjectSchema, create: z.union([ ProveedoresCreateInputObjectSchema, ProveedoresUncheckedCreateInputObjectSchema ]), update: z.union([ ProveedoresUpdateInputObjectSchema, ProveedoresUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProveedoresUpsertArgs>;

export const ProveedoresUpsertOneZodSchema = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), where: ProveedoresWhereUniqueInputObjectSchema, create: z.union([ ProveedoresCreateInputObjectSchema, ProveedoresUncheckedCreateInputObjectSchema ]), update: z.union([ ProveedoresUpdateInputObjectSchema, ProveedoresUncheckedUpdateInputObjectSchema ]) }).strict();