import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './objects/RegistroWhereInput.schema';

export const RegistroDeleteManySchema: z.ZodType<Prisma.RegistroDeleteManyArgs> = z.object({ where: RegistroWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDeleteManyArgs>;

export const RegistroDeleteManyZodSchema = z.object({ where: RegistroWhereInputObjectSchema.optional() }).strict();