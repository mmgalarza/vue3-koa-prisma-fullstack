import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './objects/TalonariosWhereInput.schema';

export const TalonariosDeleteManySchema: z.ZodType<Prisma.TalonariosDeleteManyArgs> = z.object({ where: TalonariosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosDeleteManyArgs>;

export const TalonariosDeleteManyZodSchema = z.object({ where: TalonariosWhereInputObjectSchema.optional() }).strict();