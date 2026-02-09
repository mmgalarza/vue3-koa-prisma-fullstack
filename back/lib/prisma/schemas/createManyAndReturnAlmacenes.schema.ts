import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesCreateManyInputObjectSchema as AlmacenesCreateManyInputObjectSchema } from './objects/AlmacenesCreateManyInput.schema';

export const AlmacenesCreateManyAndReturnSchema: z.ZodType<Prisma.AlmacenesCreateManyAndReturnArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), data: z.union([ AlmacenesCreateManyInputObjectSchema, z.array(AlmacenesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesCreateManyAndReturnArgs>;

export const AlmacenesCreateManyAndReturnZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), data: z.union([ AlmacenesCreateManyInputObjectSchema, z.array(AlmacenesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();