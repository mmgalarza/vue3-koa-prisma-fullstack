import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './objects/FacturaWhereInput.schema';

export const FacturaDeleteManySchema: z.ZodType<Prisma.FacturaDeleteManyArgs> = z.object({ where: FacturaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacturaDeleteManyArgs>;

export const FacturaDeleteManyZodSchema = z.object({ where: FacturaWhereInputObjectSchema.optional() }).strict();