import type { Prisma } from '../client';
import * as z from 'zod';
import { ListaPvpDetSelectObjectSchema as ListaPvpDetSelectObjectSchema } from './objects/ListaPvpDetSelect.schema';
import { ListaPvpDetUpdateManyMutationInputObjectSchema as ListaPvpDetUpdateManyMutationInputObjectSchema } from './objects/ListaPvpDetUpdateManyMutationInput.schema';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './objects/ListaPvpDetWhereInput.schema';

export const ListaPvpDetUpdateManyAndReturnSchema: z.ZodType<Prisma.ListaPvpDetUpdateManyAndReturnArgs> = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), data: ListaPvpDetUpdateManyMutationInputObjectSchema, where: ListaPvpDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateManyAndReturnArgs>;

export const ListaPvpDetUpdateManyAndReturnZodSchema = z.object({ select: ListaPvpDetSelectObjectSchema.optional(), data: ListaPvpDetUpdateManyMutationInputObjectSchema, where: ListaPvpDetWhereInputObjectSchema.optional() }).strict();