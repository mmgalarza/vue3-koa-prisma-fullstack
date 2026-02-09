import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './objects/ActividadWhereInput.schema';

export const ActividadDeleteManySchema: z.ZodType<Prisma.ActividadDeleteManyArgs> = z.object({ where: ActividadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActividadDeleteManyArgs>;

export const ActividadDeleteManyZodSchema = z.object({ where: ActividadWhereInputObjectSchema.optional() }).strict();