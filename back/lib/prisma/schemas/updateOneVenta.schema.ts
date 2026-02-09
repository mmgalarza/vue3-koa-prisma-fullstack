import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './objects/VentaInclude.schema';
import { VentaUpdateInputObjectSchema as VentaUpdateInputObjectSchema } from './objects/VentaUpdateInput.schema';
import { VentaUncheckedUpdateInputObjectSchema as VentaUncheckedUpdateInputObjectSchema } from './objects/VentaUncheckedUpdateInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';

export const VentaUpdateOneSchema: z.ZodType<Prisma.VentaUpdateArgs> = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), data: z.union([VentaUpdateInputObjectSchema, VentaUncheckedUpdateInputObjectSchema]), where: VentaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VentaUpdateArgs>;

export const VentaUpdateOneZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), data: z.union([VentaUpdateInputObjectSchema, VentaUncheckedUpdateInputObjectSchema]), where: VentaWhereUniqueInputObjectSchema }).strict();