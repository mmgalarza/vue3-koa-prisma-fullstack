import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';

export const VentaDeleteManySchema: z.ZodType<Prisma.VentaDeleteManyArgs> = z.object({ where: VentaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaDeleteManyArgs>;

export const VentaDeleteManyZodSchema = z.object({ where: VentaWhereInputObjectSchema.optional() }).strict();