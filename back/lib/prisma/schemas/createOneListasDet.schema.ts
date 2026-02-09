import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetIncludeObjectSchema as ListasDetIncludeObjectSchema } from './objects/ListasDetInclude.schema';
import { ListasDetCreateInputObjectSchema as ListasDetCreateInputObjectSchema } from './objects/ListasDetCreateInput.schema';
import { ListasDetUncheckedCreateInputObjectSchema as ListasDetUncheckedCreateInputObjectSchema } from './objects/ListasDetUncheckedCreateInput.schema';

export const ListasDetCreateOneSchema: z.ZodType<Prisma.ListasDetCreateArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), data: z.union([ListasDetCreateInputObjectSchema, ListasDetUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ListasDetCreateArgs>;

export const ListasDetCreateOneZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), include: ListasDetIncludeObjectSchema.optional(), data: z.union([ListasDetCreateInputObjectSchema, ListasDetUncheckedCreateInputObjectSchema]) }).strict();