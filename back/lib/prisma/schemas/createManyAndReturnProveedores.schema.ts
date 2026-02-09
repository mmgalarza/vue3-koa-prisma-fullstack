import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './objects/ProveedoresSelect.schema';
import { ProveedoresCreateManyInputObjectSchema as ProveedoresCreateManyInputObjectSchema } from './objects/ProveedoresCreateManyInput.schema';

export const ProveedoresCreateManyAndReturnSchema: z.ZodType<Prisma.ProveedoresCreateManyAndReturnArgs> = z.object({ select: ProveedoresSelectObjectSchema.optional(), data: z.union([ ProveedoresCreateManyInputObjectSchema, z.array(ProveedoresCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresCreateManyAndReturnArgs>;

export const ProveedoresCreateManyAndReturnZodSchema = z.object({ select: ProveedoresSelectObjectSchema.optional(), data: z.union([ ProveedoresCreateManyInputObjectSchema, z.array(ProveedoresCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();