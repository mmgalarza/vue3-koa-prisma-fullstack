import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './objects/AlmacenesInclude.schema';
import { AlmacenesUpdateInputObjectSchema as AlmacenesUpdateInputObjectSchema } from './objects/AlmacenesUpdateInput.schema';
import { AlmacenesUncheckedUpdateInputObjectSchema as AlmacenesUncheckedUpdateInputObjectSchema } from './objects/AlmacenesUncheckedUpdateInput.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './objects/AlmacenesWhereUniqueInput.schema';

export const AlmacenesUpdateOneSchema: z.ZodType<Prisma.AlmacenesUpdateArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), data: z.union([AlmacenesUpdateInputObjectSchema, AlmacenesUncheckedUpdateInputObjectSchema]), where: AlmacenesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AlmacenesUpdateArgs>;

export const AlmacenesUpdateOneZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), data: z.union([AlmacenesUpdateInputObjectSchema, AlmacenesUncheckedUpdateInputObjectSchema]), where: AlmacenesWhereUniqueInputObjectSchema }).strict();