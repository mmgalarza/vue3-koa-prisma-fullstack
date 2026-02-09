import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './objects/ListaPvpDetSelect.schema';
import { ListaPvpDetIncludeObjectSchema as ListaPvpDetIncludeObjectSchema } from './objects/ListaPvpDetInclude.schema';
import { ListaPvpDetCreateInputObjectSchema as ListaPvpDetCreateInputObjectSchema } from './objects/ListaPvpDetCreateInput.schema';
import { ListaPvpDetUncheckedCreateInputObjectSchema as ListaPvpDetUncheckedCreateInputObjectSchema } from './objects/ListaPvpDetUncheckedCreateInput.schema';

export const ListaPvpDetCreateOneSchema: z.ZodType<Prisma.ListaPvpDetCreateArgs> = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), data: z.union([ListaPvpDetCreateInputObjectSchema, ListaPvpDetUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetCreateArgs>;

export const ListaPvpDetCreateOneZodSchema = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), include: ListaPvpDetIncludeObjectSchema.optional(), data: z.union([ListaPvpDetCreateInputObjectSchema, ListaPvpDetUncheckedCreateInputObjectSchema]) }).strict();