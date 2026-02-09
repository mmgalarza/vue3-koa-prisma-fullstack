import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './objects/ProveedoresSelect.schema';
import { ProveedoresIncludeObjectSchema as ProveedoresIncludeObjectSchema } from './objects/ProveedoresInclude.schema';
import { ProveedoresCreateInputObjectSchema as ProveedoresCreateInputObjectSchema } from './objects/ProveedoresCreateInput.schema';
import { ProveedoresUncheckedCreateInputObjectSchema as ProveedoresUncheckedCreateInputObjectSchema } from './objects/ProveedoresUncheckedCreateInput.schema';

export const ProveedoresCreateOneSchema: z.ZodType<Prisma.ProveedoresCreateArgs> = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), data: z.union([ProveedoresCreateInputObjectSchema, ProveedoresUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProveedoresCreateArgs>;

export const ProveedoresCreateOneZodSchema = z.object({ select: ProveedoresSelectObjectSchema.optional(), include: ProveedoresIncludeObjectSchema.optional(), data: z.union([ProveedoresCreateInputObjectSchema, ProveedoresUncheckedCreateInputObjectSchema]) }).strict();