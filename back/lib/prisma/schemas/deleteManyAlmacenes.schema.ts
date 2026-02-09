import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './objects/AlmacenesWhereInput.schema';

export const AlmacenesDeleteManySchema: z.ZodType<Prisma.AlmacenesDeleteManyArgs> = z.object({ where: AlmacenesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesDeleteManyArgs>;

export const AlmacenesDeleteManyZodSchema = z.object({ where: AlmacenesWhereInputObjectSchema.optional() }).strict();