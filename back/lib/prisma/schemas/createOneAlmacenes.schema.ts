import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesIncludeObjectSchema as AlmacenesIncludeObjectSchema } from './objects/AlmacenesInclude.schema';
import { AlmacenesCreateInputObjectSchema as AlmacenesCreateInputObjectSchema } from './objects/AlmacenesCreateInput.schema';
import { AlmacenesUncheckedCreateInputObjectSchema as AlmacenesUncheckedCreateInputObjectSchema } from './objects/AlmacenesUncheckedCreateInput.schema';

export const AlmacenesCreateOneSchema: z.ZodType<Prisma.AlmacenesCreateArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), data: z.union([AlmacenesCreateInputObjectSchema, AlmacenesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AlmacenesCreateArgs>;

export const AlmacenesCreateOneZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), include: AlmacenesIncludeObjectSchema.optional(), data: z.union([AlmacenesCreateInputObjectSchema, AlmacenesUncheckedCreateInputObjectSchema]) }).strict();