import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './objects/AlmacenesInclude.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './objects/AlmacenesWhereUniqueInput.schema';

export const AlmacenesDeleteOneSchema: z.ZodType<Prisma.AlmacenesDeleteArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), where: AlmacenesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AlmacenesDeleteArgs>;

export const AlmacenesDeleteOneZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), where: AlmacenesWhereUniqueInputObjectSchema }).strict();