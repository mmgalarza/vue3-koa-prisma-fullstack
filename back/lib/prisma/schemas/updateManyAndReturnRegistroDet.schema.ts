import type { Prisma } from '../client';
import * as z from 'zod';
import { RegistroDetSelectObjectSchema as RegistroDetSelectObjectSchema } from './objects/RegistroDetSelect.schema';
import { RegistroDetUpdateManyMutationInputObjectSchema as RegistroDetUpdateManyMutationInputObjectSchema } from './objects/RegistroDetUpdateManyMutationInput.schema';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './objects/RegistroDetWhereInput.schema';

export const RegistroDetUpdateManyAndReturnSchema: z.ZodType<Prisma.RegistroDetUpdateManyAndReturnArgs> = z.object({ select: RegistroDetSelectObjectSchema.optional(), data: RegistroDetUpdateManyMutationInputObjectSchema, where: RegistroDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyAndReturnArgs>;

export const RegistroDetUpdateManyAndReturnZodSchema = z.object({ select: RegistroDetSelectObjectSchema.optional(), data: RegistroDetUpdateManyMutationInputObjectSchema, where: RegistroDetWhereInputObjectSchema.optional() }).strict();