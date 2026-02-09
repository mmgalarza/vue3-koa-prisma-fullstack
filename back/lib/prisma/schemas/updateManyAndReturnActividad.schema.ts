import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './objects/ActividadSelect.schema';
import { ActividadUpdateManyMutationInputObjectSchema as ActividadUpdateManyMutationInputObjectSchema } from './objects/ActividadUpdateManyMutationInput.schema';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './objects/ActividadWhereInput.schema';

export const ActividadUpdateManyAndReturnSchema: z.ZodType<Prisma.ActividadUpdateManyAndReturnArgs> = z.object({ select: ActividadSelectObjectSchema.optional(), data: ActividadUpdateManyMutationInputObjectSchema, where: ActividadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActividadUpdateManyAndReturnArgs>;

export const ActividadUpdateManyAndReturnZodSchema = z.object({ select: ActividadSelectObjectSchema.optional(), data: ActividadUpdateManyMutationInputObjectSchema, where: ActividadWhereInputObjectSchema.optional() }).strict();