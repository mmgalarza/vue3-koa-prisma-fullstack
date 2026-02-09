import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresSelectObjectSchema as ProveedoresSelectObjectSchema } from './objects/ProveedoresSelect.schema';
import { ProveedoresUpdateManyMutationInputObjectSchema as ProveedoresUpdateManyMutationInputObjectSchema } from './objects/ProveedoresUpdateManyMutationInput.schema';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './objects/ProveedoresWhereInput.schema';

export const ProveedoresUpdateManyAndReturnSchema: z.ZodType<Prisma.ProveedoresUpdateManyAndReturnArgs> = z.object({ select: ProveedoresSelectObjectSchema.optional(), data: ProveedoresUpdateManyMutationInputObjectSchema, where: ProveedoresWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresUpdateManyAndReturnArgs>;

export const ProveedoresUpdateManyAndReturnZodSchema = z.object({ select: ProveedoresSelectObjectSchema.optional(), data: ProveedoresUpdateManyMutationInputObjectSchema, where: ProveedoresWhereInputObjectSchema.optional() }).strict();