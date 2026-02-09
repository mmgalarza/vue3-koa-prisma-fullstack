import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './objects/RegistroSelect.schema';
import { RegistroIncludeObjectSchema as RegistroIncludeObjectSchema } from './objects/RegistroInclude.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './objects/RegistroWhereUniqueInput.schema';
import { RegistroCreateInputObjectSchema as RegistroCreateInputObjectSchema } from './objects/RegistroCreateInput.schema';
import { RegistroUncheckedCreateInputObjectSchema as RegistroUncheckedCreateInputObjectSchema } from './objects/RegistroUncheckedCreateInput.schema';
import { RegistroUpdateInputObjectSchema as RegistroUpdateInputObjectSchema } from './objects/RegistroUpdateInput.schema';
import { RegistroUncheckedUpdateInputObjectSchema as RegistroUncheckedUpdateInputObjectSchema } from './objects/RegistroUncheckedUpdateInput.schema';

export const RegistroUpsertOneSchema: z.ZodType<Prisma.RegistroUpsertArgs> = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), where: RegistroWhereUniqueInputObjectSchema, create: z.union([ RegistroCreateInputObjectSchema, RegistroUncheckedCreateInputObjectSchema ]), update: z.union([ RegistroUpdateInputObjectSchema, RegistroUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RegistroUpsertArgs>;

export const RegistroUpsertOneZodSchema = z.object({ select: RegistroSelectObjectSchema.optional(), include: RegistroIncludeObjectSchema.optional(), where: RegistroWhereUniqueInputObjectSchema, create: z.union([ RegistroCreateInputObjectSchema, RegistroUncheckedCreateInputObjectSchema ]), update: z.union([ RegistroUpdateInputObjectSchema, RegistroUncheckedUpdateInputObjectSchema ]) }).strict();