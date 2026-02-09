import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './objects/AlmacenesInclude.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './objects/AlmacenesWhereUniqueInput.schema';
import { AlmacenesCreateInputObjectSchema as AlmacenesCreateInputObjectSchema } from './objects/AlmacenesCreateInput.schema';
import { AlmacenesUncheckedCreateInputObjectSchema as AlmacenesUncheckedCreateInputObjectSchema } from './objects/AlmacenesUncheckedCreateInput.schema';
import { AlmacenesUpdateInputObjectSchema as AlmacenesUpdateInputObjectSchema } from './objects/AlmacenesUpdateInput.schema';
import { AlmacenesUncheckedUpdateInputObjectSchema as AlmacenesUncheckedUpdateInputObjectSchema } from './objects/AlmacenesUncheckedUpdateInput.schema';

export const AlmacenesUpsertOneSchema: z.ZodType<Prisma.AlmacenesUpsertArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), where: AlmacenesWhereUniqueInputObjectSchema, create: z.union([ AlmacenesCreateInputObjectSchema, AlmacenesUncheckedCreateInputObjectSchema ]), update: z.union([ AlmacenesUpdateInputObjectSchema, AlmacenesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AlmacenesUpsertArgs>;

export const AlmacenesUpsertOneZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), where: AlmacenesWhereUniqueInputObjectSchema, create: z.union([ AlmacenesCreateInputObjectSchema, AlmacenesUncheckedCreateInputObjectSchema ]), update: z.union([ AlmacenesUpdateInputObjectSchema, AlmacenesUncheckedUpdateInputObjectSchema ]) }).strict();