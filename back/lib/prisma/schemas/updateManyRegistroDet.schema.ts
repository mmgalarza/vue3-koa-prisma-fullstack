import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetUpdateManyMutationInputObjectSchema as RegistroDetUpdateManyMutationInputObjectSchema } from './objects/RegistroDetUpdateManyMutationInput.schema';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './objects/RegistroDetWhereInput.schema';

export const RegistroDetUpdateManySchema: z.ZodType<Prisma.RegistroDetUpdateManyArgs> = z.object({ data: RegistroDetUpdateManyMutationInputObjectSchema, where: RegistroDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyArgs>;

export const RegistroDetUpdateManyZodSchema = z.object({ data: RegistroDetUpdateManyMutationInputObjectSchema, where: RegistroDetWhereInputObjectSchema.optional() }).strict();