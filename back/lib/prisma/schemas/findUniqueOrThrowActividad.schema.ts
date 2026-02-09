import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './objects/ActividadSelect.schema';
import { ActividadIncludeObjectSchema as ActividadIncludeObjectSchema } from './objects/ActividadInclude.schema';
import { ActividadWhereUniqueInputObjectSchema as ActividadWhereUniqueInputObjectSchema } from './objects/ActividadWhereUniqueInput.schema';

export const ActividadFindUniqueOrThrowSchema: z.ZodType<Prisma.ActividadFindUniqueOrThrowArgs> = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), where: ActividadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActividadFindUniqueOrThrowArgs>;

export const ActividadFindUniqueOrThrowZodSchema = z.object({ select: ActividadSelectObjectSchema.optional(), include: ActividadIncludeObjectSchema.optional(), where: ActividadWhereUniqueInputObjectSchema }).strict();