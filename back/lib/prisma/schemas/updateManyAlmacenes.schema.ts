import type { Prisma } from '../client';
import * as z from 'zod';
import { AlmacenesUpdateManyMutationInputObjectSchema as AlmacenesUpdateManyMutationInputObjectSchema } from './objects/AlmacenesUpdateManyMutationInput.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './objects/AlmacenesWhereInput.schema';

export const AlmacenesUpdateManySchema: z.ZodType<Prisma.AlmacenesUpdateManyArgs> = z.object({ data: AlmacenesUpdateManyMutationInputObjectSchema, where: AlmacenesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AlmacenesUpdateManyArgs>;

export const AlmacenesUpdateManyZodSchema = z.object({ data: AlmacenesUpdateManyMutationInputObjectSchema, where: AlmacenesWhereInputObjectSchema.optional() }).strict();