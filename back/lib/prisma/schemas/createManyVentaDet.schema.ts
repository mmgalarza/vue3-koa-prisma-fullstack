import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetCreateManyInputObjectSchema as VentaDetCreateManyInputObjectSchema } from './objects/VentaDetCreateManyInput.schema';

export const VentaDetCreateManySchema: z.ZodType<Prisma.VentaDetCreateManyArgs> = z.object({ data: z.union([ VentaDetCreateManyInputObjectSchema, z.array(VentaDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetCreateManyArgs>;

export const VentaDetCreateManyZodSchema = z.object({ data: z.union([ VentaDetCreateManyInputObjectSchema, z.array(VentaDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();