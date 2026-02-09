import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresUpdateManyMutationInputObjectSchema as ProveedoresUpdateManyMutationInputObjectSchema } from './objects/ProveedoresUpdateManyMutationInput.schema';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './objects/ProveedoresWhereInput.schema';

export const ProveedoresUpdateManySchema: z.ZodType<Prisma.ProveedoresUpdateManyArgs> = z.object({ data: ProveedoresUpdateManyMutationInputObjectSchema, where: ProveedoresWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresUpdateManyArgs>;

export const ProveedoresUpdateManyZodSchema = z.object({ data: ProveedoresUpdateManyMutationInputObjectSchema, where: ProveedoresWhereInputObjectSchema.optional() }).strict();