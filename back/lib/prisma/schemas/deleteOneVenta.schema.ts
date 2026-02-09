import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './objects/VentaInclude.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';

export const VentaDeleteOneSchema: z.ZodType<Prisma.VentaDeleteArgs> = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), where: VentaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VentaDeleteArgs>;

export const VentaDeleteOneZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), where: VentaWhereUniqueInputObjectSchema }).strict();