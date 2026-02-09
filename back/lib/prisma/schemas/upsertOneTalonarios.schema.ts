import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './objects/TalonariosInclude.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './objects/TalonariosWhereUniqueInput.schema';
import { TalonariosCreateInputObjectSchema as TalonariosCreateInputObjectSchema } from './objects/TalonariosCreateInput.schema';
import { TalonariosUncheckedCreateInputObjectSchema as TalonariosUncheckedCreateInputObjectSchema } from './objects/TalonariosUncheckedCreateInput.schema';
import { TalonariosUpdateInputObjectSchema as TalonariosUpdateInputObjectSchema } from './objects/TalonariosUpdateInput.schema';
import { TalonariosUncheckedUpdateInputObjectSchema as TalonariosUncheckedUpdateInputObjectSchema } from './objects/TalonariosUncheckedUpdateInput.schema';

export const TalonariosUpsertOneSchema: z.ZodType<Prisma.TalonariosUpsertArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), where: TalonariosWhereUniqueInputObjectSchema, create: z.union([ TalonariosCreateInputObjectSchema, TalonariosUncheckedCreateInputObjectSchema ]), update: z.union([ TalonariosUpdateInputObjectSchema, TalonariosUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TalonariosUpsertArgs>;

export const TalonariosUpsertOneZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), where: TalonariosWhereUniqueInputObjectSchema, create: z.union([ TalonariosCreateInputObjectSchema, TalonariosUncheckedCreateInputObjectSchema ]), update: z.union([ TalonariosUpdateInputObjectSchema, TalonariosUncheckedUpdateInputObjectSchema ]) }).strict();