import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroSelectObjectSchema as RegistroSelectObjectSchema } from './objects/RegistroSelect.schema';
import { RegistroUpdateManyMutationInputObjectSchema as RegistroUpdateManyMutationInputObjectSchema } from './objects/RegistroUpdateManyMutationInput.schema';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './objects/RegistroWhereInput.schema';

export const RegistroUpdateManyAndReturnSchema: z.ZodType<Prisma.RegistroUpdateManyAndReturnArgs> = z.object({ select: RegistroSelectObjectSchema.optional(), data: RegistroUpdateManyMutationInputObjectSchema, where: RegistroWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistroUpdateManyAndReturnArgs>;

export const RegistroUpdateManyAndReturnZodSchema = z.object({ select: RegistroSelectObjectSchema.optional(), data: RegistroUpdateManyMutationInputObjectSchema, where: RegistroWhereInputObjectSchema.optional() }).strict();