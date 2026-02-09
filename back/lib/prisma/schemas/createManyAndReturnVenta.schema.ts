import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaCreateManyInputObjectSchema as VentaCreateManyInputObjectSchema } from './objects/VentaCreateManyInput.schema';

export const VentaCreateManyAndReturnSchema: z.ZodType<Prisma.VentaCreateManyAndReturnArgs> = z.object({ select: VentaSelectObjectSchema.optional(), data: z.union([ VentaCreateManyInputObjectSchema, z.array(VentaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VentaCreateManyAndReturnArgs>;

export const VentaCreateManyAndReturnZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), data: z.union([ VentaCreateManyInputObjectSchema, z.array(VentaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();