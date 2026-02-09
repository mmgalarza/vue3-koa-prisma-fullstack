import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './objects/RegistroDetSelect.schema';
import { RegistroDetIncludeObjectSchema as RegistroDetIncludeObjectSchema } from './objects/RegistroDetInclude.schema';
import { RegistroDetUpdateInputObjectSchema as RegistroDetUpdateInputObjectSchema } from './objects/RegistroDetUpdateInput.schema';
import { RegistroDetUncheckedUpdateInputObjectSchema as RegistroDetUncheckedUpdateInputObjectSchema } from './objects/RegistroDetUncheckedUpdateInput.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './objects/RegistroDetWhereUniqueInput.schema';

export const RegistroDetUpdateOneSchema: z.ZodType<Prisma.RegistroDetUpdateArgs> = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), data: z.union([RegistroDetUpdateInputObjectSchema, RegistroDetUncheckedUpdateInputObjectSchema]), where: RegistroDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistroDetUpdateArgs>;

export const RegistroDetUpdateOneZodSchema = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), data: z.union([RegistroDetUpdateInputObjectSchema, RegistroDetUncheckedUpdateInputObjectSchema]), where: RegistroDetWhereUniqueInputObjectSchema }).strict();