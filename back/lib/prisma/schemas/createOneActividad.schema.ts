import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './objects/ActividadSelect.schema';
import { ActividadIncludeObjectSchema as ActividadIncludeObjectSchema } from './objects/ActividadInclude.schema';
import { ActividadCreateInputObjectSchema as ActividadCreateInputObjectSchema } from './objects/ActividadCreateInput.schema';
import { ActividadUncheckedCreateInputObjectSchema as ActividadUncheckedCreateInputObjectSchema } from './objects/ActividadUncheckedCreateInput.schema';

export const ActividadCreateOneSchema: z.ZodType<Prisma.ActividadCreateArgs> = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), data: z.union([ActividadCreateInputObjectSchema, ActividadUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActividadCreateArgs>;

export const ActividadCreateOneZodSchema = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), data: z.union([ActividadCreateInputObjectSchema, ActividadUncheckedCreateInputObjectSchema]) }).strict();