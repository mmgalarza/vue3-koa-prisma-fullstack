import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './objects/VentaDetSelect.schema';
import { VentaDetUpdateManyMutationInputObjectSchema as VentaDetUpdateManyMutationInputObjectSchema } from './objects/VentaDetUpdateManyMutationInput.schema';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './objects/VentaDetWhereInput.schema';

export const VentaDetUpdateManyAndReturnSchema: z.ZodType<Prisma.VentaDetUpdateManyAndReturnArgs> = z.object({ select: VentaDetSelectObjectSchema.optional(), data: VentaDetUpdateManyMutationInputObjectSchema, where: VentaDetWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaDetUpdateManyAndReturnArgs>;

export const VentaDetUpdateManyAndReturnZodSchema = z.object({ select: VentaDetSelectObjectSchema.optional(), data: VentaDetUpdateManyMutationInputObjectSchema, where: VentaDetWhereInputObjectSchema.optional() }).strict();