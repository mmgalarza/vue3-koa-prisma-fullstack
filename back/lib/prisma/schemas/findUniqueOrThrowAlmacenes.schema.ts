import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './objects/AlmacenesInclude.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './objects/AlmacenesWhereUniqueInput.schema';

export const AlmacenesFindUniqueOrThrowSchema: z.ZodType<Prisma.AlmacenesFindUniqueOrThrowArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), where: AlmacenesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AlmacenesFindUniqueOrThrowArgs>;

export const AlmacenesFindUniqueOrThrowZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), where: AlmacenesWhereUniqueInputObjectSchema }).strict();