import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './objects/TalonariosInclude.schema';
import { TalonariosUpdateInputObjectSchema as TalonariosUpdateInputObjectSchema } from './objects/TalonariosUpdateInput.schema';
import { TalonariosUncheckedUpdateInputObjectSchema as TalonariosUncheckedUpdateInputObjectSchema } from './objects/TalonariosUncheckedUpdateInput.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './objects/TalonariosWhereUniqueInput.schema';

export const TalonariosUpdateOneSchema: z.ZodType<Prisma.TalonariosUpdateArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), data: z.union([TalonariosUpdateInputObjectSchema, TalonariosUncheckedUpdateInputObjectSchema]), where: TalonariosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TalonariosUpdateArgs>;

export const TalonariosUpdateOneZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), data: z.union([TalonariosUpdateInputObjectSchema, TalonariosUncheckedUpdateInputObjectSchema]), where: TalonariosWhereUniqueInputObjectSchema }).strict();