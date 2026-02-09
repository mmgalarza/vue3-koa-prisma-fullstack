import type { Prisma } from '../client';
import * as z from 'zod';
import { ActividadCreateManyInputObjectSchema as ActividadCreateManyInputObjectSchema } from './objects/ActividadCreateManyInput.schema';

export const ActividadCreateManySchema: z.ZodType<Prisma.ActividadCreateManyArgs> = z.object({ data: z.union([ ActividadCreateManyInputObjectSchema, z.array(ActividadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActividadCreateManyArgs>;

export const ActividadCreateManyZodSchema = z.object({ data: z.union([ ActividadCreateManyInputObjectSchema, z.array(ActividadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();