import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaCreateManyInputObjectSchema as VentaCreateManyInputObjectSchema } from './objects/VentaCreateManyInput.schema';

export const VentaCreateManySchema: z.ZodType<Prisma.VentaCreateManyArgs> = z.object({ data: z.union([ VentaCreateManyInputObjectSchema, z.array(VentaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VentaCreateManyArgs>;

export const VentaCreateManyZodSchema = z.object({ data: z.union([ VentaCreateManyInputObjectSchema, z.array(VentaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();