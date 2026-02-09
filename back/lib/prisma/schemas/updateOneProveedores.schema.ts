import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './objects/ProveedoresSelect.schema';
import { ProveedoresIncludeObjectSchema as ProveedoresIncludeObjectSchema } from './objects/ProveedoresInclude.schema';
import { ProveedoresUpdateInputObjectSchema as ProveedoresUpdateInputObjectSchema } from './objects/ProveedoresUpdateInput.schema';
import { ProveedoresUncheckedUpdateInputObjectSchema as ProveedoresUncheckedUpdateInputObjectSchema } from './objects/ProveedoresUncheckedUpdateInput.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './objects/ProveedoresWhereUniqueInput.schema';

export const ProveedoresUpdateOneSchema: z.ZodType<Prisma.ProveedoresUpdateArgs> = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), data: z.union([ProveedoresUpdateInputObjectSchema, ProveedoresUncheckedUpdateInputObjectSchema]), where: ProveedoresWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProveedoresUpdateArgs>;

export const ProveedoresUpdateOneZodSchema = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), data: z.union([ProveedoresUpdateInputObjectSchema, ProveedoresUncheckedUpdateInputObjectSchema]), where: ProveedoresWhereUniqueInputObjectSchema }).strict();