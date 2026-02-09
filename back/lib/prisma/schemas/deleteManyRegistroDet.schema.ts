import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './objects/RegistroDetWhereInput.schema';

export const RegistroDetDeleteManySchema: z.ZodType<Prisma.RegistroDetDeleteManyArgs> = z.object({ where: RegistroDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetDeleteManyArgs>;

export const RegistroDetDeleteManyZodSchema = z.object({ where: RegistroDetWhereInputObjectSchema.optional() }).strict();