import type { Prisma } from '../client';
import * as z from 'zod';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './objects/ProveedoresWhereInput.schema';

export const ProveedoresDeleteManySchema: z.ZodType<Prisma.ProveedoresDeleteManyArgs> = z.object({ where: ProveedoresWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProveedoresDeleteManyArgs>;

export const ProveedoresDeleteManyZodSchema = z.object({ where: ProveedoresWhereInputObjectSchema.optional() }).strict();