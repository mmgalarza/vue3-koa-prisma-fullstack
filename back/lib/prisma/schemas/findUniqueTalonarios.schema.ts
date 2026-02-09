import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosIncludeObjectSchema as TalonariosIncludeObjectSchema } from './objects/TalonariosInclude.schema';
import { TalonariosWhereUniqueInputObjectSchema as TalonariosWhereUniqueInputObjectSchema } from './objects/TalonariosWhereUniqueInput.schema';

export const TalonariosFindUniqueSchema: z.ZodType<Prisma.TalonariosFindUniqueArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), where: TalonariosWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TalonariosFindUniqueArgs>;

export const TalonariosFindUniqueZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), include: TalonariosIncludeObjectSchema.optional(), where: TalonariosWhereUniqueInputObjectSchema }).strict();