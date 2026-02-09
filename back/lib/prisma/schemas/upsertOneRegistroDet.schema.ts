import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './objects/RegistroDetSelect.schema';
import { RegistroDetIncludeObjectSchema as RegistroDetIncludeObjectSchema } from './objects/RegistroDetInclude.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './objects/RegistroDetWhereUniqueInput.schema';
import { RegistroDetCreateInputObjectSchema as RegistroDetCreateInputObjectSchema } from './objects/RegistroDetCreateInput.schema';
import { RegistroDetUncheckedCreateInputObjectSchema as RegistroDetUncheckedCreateInputObjectSchema } from './objects/RegistroDetUncheckedCreateInput.schema';
import { RegistroDetUpdateInputObjectSchema as RegistroDetUpdateInputObjectSchema } from './objects/RegistroDetUpdateInput.schema';
import { RegistroDetUncheckedUpdateInputObjectSchema as RegistroDetUncheckedUpdateInputObjectSchema } from './objects/RegistroDetUncheckedUpdateInput.schema';

export const RegistroDetUpsertOneSchema: z.ZodType<Prisma.RegistroDetUpsertArgs> = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), where: RegistroDetWhereUniqueInputObjectSchema, create: z.union([ RegistroDetCreateInputObjectSchema, RegistroDetUncheckedCreateInputObjectSchema ]), update: z.union([ RegistroDetUpdateInputObjectSchema, RegistroDetUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RegistroDetUpsertArgs>;

export const RegistroDetUpsertOneZodSchema = z.object({ select: RegistroDetSelectObjectSchema.optional(), include: RegistroDetIncludeObjectSchema.optional(), where: RegistroDetWhereUniqueInputObjectSchema, create: z.union([ RegistroDetCreateInputObjectSchema, RegistroDetUncheckedCreateInputObjectSchema ]), update: z.union([ RegistroDetUpdateInputObjectSchema, RegistroDetUncheckedUpdateInputObjectSchema ]) }).strict();