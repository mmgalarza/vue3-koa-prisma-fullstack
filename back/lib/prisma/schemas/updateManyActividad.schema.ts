import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadUpdateManyMutationInputObjectSchema as ActividadUpdateManyMutationInputObjectSchema } from './objects/ActividadUpdateManyMutationInput.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './objects/ActividadWhereInput.schema';

export const ActividadUpdateManySchema: z.ZodType<Prisma.ActividadUpdateManyArgs> = z.object({ data: ActividadUpdateManyMutationInputObjectSchema, where: ActividadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActividadUpdateManyArgs>;

export const ActividadUpdateManyZodSchema = z.object({ data: ActividadUpdateManyMutationInputObjectSchema, where: ActividadWhereInputObjectSchema.optional() }).strict();