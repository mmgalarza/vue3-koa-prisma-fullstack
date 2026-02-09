import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './objects/VentaDetWhereInput.schema';

export const VentaDetDeleteManySchema: z.ZodType<Prisma.VentaDetDeleteManyArgs> = z.object({ where: VentaDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetDeleteManyArgs>;

export const VentaDetDeleteManyZodSchema = z.object({ where: VentaDetWhereInputObjectSchema.optional() }).strict();