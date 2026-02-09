import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './objects/TalonariosInclude.schema';
import { TalonariosCreateInputObjectSchema as TalonariosCreateInputObjectSchema } from './objects/TalonariosCreateInput.schema';
import { TalonariosUncheckedCreateInputObjectSchema as TalonariosUncheckedCreateInputObjectSchema } from './objects/TalonariosUncheckedCreateInput.schema';

export const TalonariosCreateOneSchema: z.ZodType<Prisma.TalonariosCreateArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), data: z.union([TalonariosCreateInputObjectSchema, TalonariosUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TalonariosCreateArgs>;

export const TalonariosCreateOneZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), data: z.union([TalonariosCreateInputObjectSchema, TalonariosUncheckedCreateInputObjectSchema]) }).strict();