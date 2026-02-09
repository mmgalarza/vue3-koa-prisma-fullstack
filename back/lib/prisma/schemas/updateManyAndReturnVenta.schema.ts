import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaUpdateManyMutationInputObjectSchema as VentaUpdateManyMutationInputObjectSchema } from './objects/VentaUpdateManyMutationInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './objects/VentaWhereInput.schema';

export const VentaUpdateManyAndReturnSchema: z.ZodType<Prisma.VentaUpdateManyAndReturnArgs> = z.object({ select: VentaSelectObjectSchema.optional(), data: VentaUpdateManyMutationInputObjectSchema, where: VentaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VentaUpdateManyAndReturnArgs>;

export const VentaUpdateManyAndReturnZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), data: VentaUpdateManyMutationInputObjectSchema, where: VentaWhereInputObjectSchema.optional() }).strict();