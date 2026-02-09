import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './objects/ActividadSelect.schema';
import { ActividadIncludeObjectSchema as ActividadIncludeObjectSchema } from './objects/ActividadInclude.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './objects/ActividadWhereUniqueInput.schema';
import { ActividadCreateInputObjectSchema as ActividadCreateInputObjectSchema } from './objects/ActividadCreateInput.schema';
import { ActividadUncheckedCreateInputObjectSchema as ActividadUncheckedCreateInputObjectSchema } from './objects/ActividadUncheckedCreateInput.schema';
import { ActividadUpdateInputObjectSchema as ActividadUpdateInputObjectSchema } from './objects/ActividadUpdateInput.schema';
import { ActividadUncheckedUpdateInputObjectSchema as ActividadUncheckedUpdateInputObjectSchema } from './objects/ActividadUncheckedUpdateInput.schema';

export const ActividadUpsertOneSchema: z.ZodType<Prisma.ActividadUpsertArgs> = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), where: ActividadWhereUniqueInputObjectSchema, create: z.union([ ActividadCreateInputObjectSchema, ActividadUncheckedCreateInputObjectSchema ]), update: z.union([ ActividadUpdateInputObjectSchema, ActividadUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActividadUpsertArgs>;

export const ActividadUpsertOneZodSchema = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), where: ActividadWhereUniqueInputObjectSchema, create: z.union([ ActividadCreateInputObjectSchema, ActividadUncheckedCreateInputObjectSchema ]), update: z.union([ ActividadUpdateInputObjectSchema, ActividadUncheckedUpdateInputObjectSchema ]) }).strict();