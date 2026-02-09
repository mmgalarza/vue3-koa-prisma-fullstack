import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaCreateManyInputObjectSchema as FacturaCreateManyInputObjectSchema } from './objects/FacturaCreateManyInput.schema';

export const FacturaCreateManyAndReturnSchema: z.ZodType<Prisma.FacturaCreateManyAndReturnArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), data: z.union([ FacturaCreateManyInputObjectSchema, z.array(FacturaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FacturaCreateManyAndReturnArgs>;

export const FacturaCreateManyAndReturnZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), data: z.union([ FacturaCreateManyInputObjectSchema, z.array(FacturaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();