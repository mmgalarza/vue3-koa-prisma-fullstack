import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaCreateManyInputObjectSchema as FacturaCreateManyInputObjectSchema } from './objects/FacturaCreateManyInput.schema';

export const FacturaCreateManySchema: z.ZodType<Prisma.FacturaCreateManyArgs> = z.object({ data: z.union([ FacturaCreateManyInputObjectSchema, z.array(FacturaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FacturaCreateManyArgs>;

export const FacturaCreateManyZodSchema = z.object({ data: z.union([ FacturaCreateManyInputObjectSchema, z.array(FacturaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();