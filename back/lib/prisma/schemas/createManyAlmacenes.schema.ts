import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesCreateManyInputObjectSchema as AlmacenesCreateManyInputObjectSchema } from './objects/AlmacenesCreateManyInput.schema';

export const AlmacenesCreateManySchema: z.ZodType<Prisma.AlmacenesCreateManyArgs> = z.object({ data: z.union([ AlmacenesCreateManyInputObjectSchema, z.array(AlmacenesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesCreateManyArgs>;

export const AlmacenesCreateManyZodSchema = z.object({ data: z.union([ AlmacenesCreateManyInputObjectSchema, z.array(AlmacenesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();