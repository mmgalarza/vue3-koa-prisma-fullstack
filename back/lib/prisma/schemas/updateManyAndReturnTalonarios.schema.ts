import type { Prisma } from '../client';
import * as z from 'zod';
import { TalonariosSelectObjectSchema as TalonariosSelectObjectSchema } from './objects/TalonariosSelect.schema';
import { TalonariosUpdateManyMutationInputObjectSchema as TalonariosUpdateManyMutationInputObjectSchema } from './objects/TalonariosUpdateManyMutationInput.schema';
import { TalonariosWhereInputObjectSchema as TalonariosWhereInputObjectSchema } from './objects/TalonariosWhereInput.schema';

export const TalonariosUpdateManyAndReturnSchema: z.ZodType<Prisma.TalonariosUpdateManyAndReturnArgs> = z.object({ select: TalonariosSelectObjectSchema.optional(), data: TalonariosUpdateManyMutationInputObjectSchema, where: TalonariosWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TalonariosUpdateManyAndReturnArgs>;

export const TalonariosUpdateManyAndReturnZodSchema = z.object({ select: TalonariosSelectObjectSchema.optional(), data: TalonariosUpdateManyMutationInputObjectSchema, where: TalonariosWhereInputObjectSchema.optional() }).strict();