import type { Prisma } from '../client';
import * as z from 'zod';
import { ListasDetSelectObjectSchema as ListasDetSelectObjectSchema } from './objects/ListasDetSelect.schema';
import { ListasDetUpdateManyMutationInputObjectSchema as ListasDetUpdateManyMutationInputObjectSchema } from './objects/ListasDetUpdateManyMutationInput.schema';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './objects/ListasDetWhereInput.schema';

export const ListasDetUpdateManyAndReturnSchema: z.ZodType<Prisma.ListasDetUpdateManyAndReturnArgs> = z.object({ select: ListasDetSelectObjectSchema.optional(), data: ListasDetUpdateManyMutationInputObjectSchema, where: ListasDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ListasDetUpdateManyAndReturnArgs>;

export const ListasDetUpdateManyAndReturnZodSchema = z.object({ select: ListasDetSelectObjectSchema.optional(), data: ListasDetUpdateManyMutationInputObjectSchema, where: ListasDetWhereInputObjectSchema.optional() }).strict();