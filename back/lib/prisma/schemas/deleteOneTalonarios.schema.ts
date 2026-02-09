import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './objects/TalonariosInclude.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './objects/TalonariosWhereUniqueInput.schema';

export const TalonariosDeleteOneSchema: z.ZodType<Prisma.TalonariosDeleteArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), where: TalonariosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TalonariosDeleteArgs>;

export const TalonariosDeleteOneZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), where: TalonariosWhereUniqueInputObjectSchema }).strict();