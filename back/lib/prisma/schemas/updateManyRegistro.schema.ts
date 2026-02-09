import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroUpdateManyMutationInputObjectSchema as RegistroUpdateManyMutationInputObjectSchema } from './objects/RegistroUpdateManyMutationInput.schema';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './objects/RegistroWhereInput.schema';

export const RegistroUpdateManySchema: z.ZodType<Prisma.RegistroUpdateManyArgs> = z.object({ data: RegistroUpdateManyMutationInputObjectSchema, where: RegistroWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistroUpdateManyArgs>;

export const RegistroUpdateManyZodSchema = z.object({ data: RegistroUpdateManyMutationInputObjectSchema, where: RegistroWhereInputObjectSchema.optional() }).strict();