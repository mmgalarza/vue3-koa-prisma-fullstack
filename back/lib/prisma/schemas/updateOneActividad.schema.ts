import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './objects/ActividadSelect.schema';
import { ActividadIncludeObjectSchema as ActividadIncludeObjectSchema } from './objects/ActividadInclude.schema';
import { ActividadUpdateInputObjectSchema as ActividadUpdateInputObjectSchema } from './objects/ActividadUpdateInput.schema';
import { ActividadUncheckedUpdateInputObjectSchema as ActividadUncheckedUpdateInputObjectSchema } from './objects/ActividadUncheckedUpdateInput.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './objects/ActividadWhereUniqueInput.schema';

export const ActividadUpdateOneSchema: z.ZodType<Prisma.ActividadUpdateArgs> = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), data: z.union([ActividadUpdateInputObjectSchema, ActividadUncheckedUpdateInputObjectSchema]), where: ActividadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActividadUpdateArgs>;

export const ActividadUpdateOneZodSchema = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), data: z.union([ActividadUpdateInputObjectSchema, ActividadUncheckedUpdateInputObjectSchema]), where: ActividadWhereUniqueInputObjectSchema }).strict();