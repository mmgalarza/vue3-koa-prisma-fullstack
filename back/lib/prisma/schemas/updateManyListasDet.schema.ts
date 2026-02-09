import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetUpdateManyMutationInputObjectSchema as ListasDetUpdateManyMutationInputObjectSchema } from './objects/ListasDetUpdateManyMutationInput.schema';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './objects/ListasDetWhereInput.schema';

export const ListasDetUpdateManySchema: z.ZodType<Prisma.ListasDetUpdateManyArgs> = z.object({ data: ListasDetUpdateManyMutationInputObjectSchema, where: ListasDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetUpdateManyArgs>;

export const ListasDetUpdateManyZodSchema = z.object({ data: ListasDetUpdateManyMutationInputObjectSchema, where: ListasDetWhereInputObjectSchema.optional() }).strict();