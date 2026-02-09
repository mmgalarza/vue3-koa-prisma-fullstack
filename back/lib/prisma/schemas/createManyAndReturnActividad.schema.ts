import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadSelectObjectSchema as ActividadSelectObjectSchema } from './objects/ActividadSelect.schema';
import { ActividadCreateManyInputObjectSchema as ActividadCreateManyInputObjectSchema } from './objects/ActividadCreateManyInput.schema';

export const ActividadCreateManyAndReturnSchema: z.ZodType<Prisma.ActividadCreateManyAndReturnArgs> = z.object({ select: ActividadSelectObjectSchema.optional(), data: z.union([ ActividadCreateManyInputObjectSchema, z.array(ActividadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActividadCreateManyAndReturnArgs>;

export const ActividadCreateManyAndReturnZodSchema = z.object({ select: ActividadSelectObjectSchema.optional(), data: z.union([ ActividadCreateManyInputObjectSchema, z.array(ActividadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();