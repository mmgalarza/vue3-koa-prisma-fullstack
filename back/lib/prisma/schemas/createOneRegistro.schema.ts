import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './objects/RegistroSelect.schema';
import { RegistroIncludeObjectSchema as RegistroIncludeObjectSchema } from './objects/RegistroInclude.schema';
import { RegistroCreateInputObjectSchema as RegistroCreateInputObjectSchema } from './objects/RegistroCreateInput.schema';
import { RegistroUncheckedCreateInputObjectSchema as RegistroUncheckedCreateInputObjectSchema } from './objects/RegistroUncheckedCreateInput.schema';

export const RegistroCreateOneSchema: z.ZodType<Prisma.RegistroCreateArgs> = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), data: z.union([RegistroCreateInputObjectSchema, RegistroUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RegistroCreateArgs>;

export const RegistroCreateOneZodSchema = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), data: z.union([RegistroCreateInputObjectSchema, RegistroUncheckedCreateInputObjectSchema]) }).strict();