import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresCreateManyInputObjectSchema as ProveedoresCreateManyInputObjectSchema } from './objects/ProveedoresCreateManyInput.schema';

export const ProveedoresCreateManySchema: z.ZodType<Prisma.ProveedoresCreateManyArgs> = z.object({ data: z.union([ ProveedoresCreateManyInputObjectSchema, z.array(ProveedoresCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresCreateManyArgs>;

export const ProveedoresCreateManyZodSchema = z.object({ data: z.union([ ProveedoresCreateManyInputObjectSchema, z.array(ProveedoresCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();