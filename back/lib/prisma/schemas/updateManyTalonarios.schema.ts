import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosUpdateManyMutationInputObjectSchema as TalonariosUpdateManyMutationInputObjectSchema } from './objects/TalonariosUpdateManyMutationInput.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './objects/TalonariosWhereInput.schema';

export const TalonariosUpdateManySchema: z.ZodType<Prisma.TalonariosUpdateManyArgs> = z.object({ data: TalonariosUpdateManyMutationInputObjectSchema, where: TalonariosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosUpdateManyArgs>;

export const TalonariosUpdateManyZodSchema = z.object({ data: TalonariosUpdateManyMutationInputObjectSchema, where: TalonariosWhereInputObjectSchema.optional() }).strict();