import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './objects/RegistroSelect.schema';
import { RegistroIncludeObjectSchema as RegistroIncludeObjectSchema } from './objects/RegistroInclude.schema';
import { RegistroUpdateInputObjectSchema as RegistroUpdateInputObjectSchema } from './objects/RegistroUpdateInput.schema';
import { RegistroUncheckedUpdateInputObjectSchema as RegistroUncheckedUpdateInputObjectSchema } from './objects/RegistroUncheckedUpdateInput.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './objects/RegistroWhereUniqueInput.schema';

export const RegistroUpdateOneSchema: z.ZodType<Prisma.RegistroUpdateArgs> = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), data: z.union([RegistroUpdateInputObjectSchema, RegistroUncheckedUpdateInputObjectSchema]), where: RegistroWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RegistroUpdateArgs>;

export const RegistroUpdateOneZodSchema = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), data: z.union([RegistroUpdateInputObjectSchema, RegistroUncheckedUpdateInputObjectSchema]), where: RegistroWhereUniqueInputObjectSchema }).strict();