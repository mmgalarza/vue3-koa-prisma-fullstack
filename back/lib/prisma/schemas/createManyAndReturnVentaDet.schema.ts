import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './objects/VentaDetSelect.schema';
import { VentaDetCreateManyInputObjectSchema as VentaDetCreateManyInputObjectSchema } from './objects/VentaDetCreateManyInput.schema';

export const VentaDetCreateManyAndReturnSchema: z.ZodType<Prisma.VentaDetCreateManyAndReturnArgs> = z.object({ select: VentaDetSelectObjectSchema.optional(), data: z.union([ VentaDetCreateManyInputObjectSchema, z.array(VentaDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetCreateManyAndReturnArgs>;

export const VentaDetCreateManyAndReturnZodSchema = z.object({ select: VentaDetSelectObjectSchema.optional(), data: z.union([ VentaDetCreateManyInputObjectSchema, z.array(VentaDetCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();