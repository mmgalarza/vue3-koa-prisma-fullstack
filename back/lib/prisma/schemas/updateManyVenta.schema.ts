import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaUpdateManyMutationInputObjectSchema as VentaUpdateManyMutationInputObjectSchema } from './objects/VentaUpdateManyMutationInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';

export const VentaUpdateManySchema: z.ZodType<Prisma.VentaUpdateManyArgs> = z.object({ data: VentaUpdateManyMutationInputObjectSchema, where: VentaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaUpdateManyArgs>;

export const VentaUpdateManyZodSchema = z.object({ data: VentaUpdateManyMutationInputObjectSchema, where: VentaWhereInputObjectSchema.optional() }).strict();