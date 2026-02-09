import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetUpdateManyMutationInputObjectSchema as ListaPvpDetUpdateManyMutationInputObjectSchema } from './objects/ListaPvpDetUpdateManyMutationInput.schema';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './objects/ListaPvpDetWhereInput.schema';

export const ListaPvpDetUpdateManySchema: z.ZodType<Prisma.ListaPvpDetUpdateManyArgs> = z.object({ data: ListaPvpDetUpdateManyMutationInputObjectSchema, where: ListaPvpDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateManyArgs>;

export const ListaPvpDetUpdateManyZodSchema = z.object({ data: ListaPvpDetUpdateManyMutationInputObjectSchema, where: ListaPvpDetWhereInputObjectSchema.optional() }).strict();