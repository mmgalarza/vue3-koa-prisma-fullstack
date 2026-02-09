import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetUpdateManyMutationInputObjectSchema as VentaDetUpdateManyMutationInputObjectSchema } from './objects/VentaDetUpdateManyMutationInput.schema';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './objects/VentaDetWhereInput.schema';

export const VentaDetUpdateManySchema: z.ZodType<Prisma.VentaDetUpdateManyArgs> = z.object({ data: VentaDetUpdateManyMutationInputObjectSchema, where: VentaDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetUpdateManyArgs>;

export const VentaDetUpdateManyZodSchema = z.object({ data: VentaDetUpdateManyMutationInputObjectSchema, where: VentaDetWhereInputObjectSchema.optional() }).strict();