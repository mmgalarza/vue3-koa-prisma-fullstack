import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesSelectObjectSchema as AlmacenesSelectObjectSchema } from './objects/AlmacenesSelect.schema';
import { AlmacenesUpdateManyMutationInputObjectSchema as AlmacenesUpdateManyMutationInputObjectSchema } from './objects/AlmacenesUpdateManyMutationInput.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './objects/AlmacenesWhereInput.schema';

export const AlmacenesUpdateManyAndReturnSchema: z.ZodType<Prisma.AlmacenesUpdateManyAndReturnArgs> = z.object({ select: AlmacenesSelectObjectSchema.optional(), data: AlmacenesUpdateManyMutationInputObjectSchema, where: AlmacenesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesUpdateManyAndReturnArgs>;

export const AlmacenesUpdateManyAndReturnZodSchema = z.object({ select: AlmacenesSelectObjectSchema.optional(), data: AlmacenesUpdateManyMutationInputObjectSchema, where: AlmacenesWhereInputObjectSchema.optional() }).strict();