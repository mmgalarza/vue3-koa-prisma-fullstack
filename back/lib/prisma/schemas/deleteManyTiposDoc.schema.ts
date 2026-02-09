import type { Prisma } from '../client';
import * as z from 'zod';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './objects/TiposDocWhereInput.schema';

export const TiposDocDeleteManySchema: z.ZodType<Prisma.TiposDocDeleteManyArgs> = z.object({ where: TiposDocWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TiposDocDeleteManyArgs>;

export const TiposDocDeleteManyZodSchema = z.object({ where: TiposDocWhereInputObjectSchema.optional() }).strict();