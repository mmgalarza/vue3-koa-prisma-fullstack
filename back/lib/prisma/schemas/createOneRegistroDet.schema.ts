import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './objects/RegistroDetSelect.schema';
import { RegistroDetIncludeObjectSchema as RegistroDetIncludeObjectSchema } from './objects/RegistroDetInclude.schema';
import { RegistroDetCreateInputObjectSchema as RegistroDetCreateInputObjectSchema } from './objects/RegistroDetCreateInput.schema';
import { RegistroDetUncheckedCreateInputObjectSchema as RegistroDetUncheckedCreateInputObjectSchema } from './objects/RegistroDetUncheckedCreateInput.schema';

export const RegistroDetCreateOneSchema: z.ZodType<Prisma.RegistroDetCreateArgs> = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), data: z.union([RegistroDetCreateInputObjectSchema, RegistroDetUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RegistroDetCreateArgs>;

export const RegistroDetCreateOneZodSchema = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), data: z.union([RegistroDetCreateInputObjectSchema, RegistroDetUncheckedCreateInputObjectSchema]) }).strict();