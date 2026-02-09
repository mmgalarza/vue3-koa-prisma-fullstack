import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './objects/VentaInclude.schema';
import { VentaCreateInputObjectSchema as VentaCreateInputObjectSchema } from './objects/VentaCreateInput.schema';
import { VentaUncheckedCreateInputObjectSchema as VentaUncheckedCreateInputObjectSchema } from './objects/VentaUncheckedCreateInput.schema';

export const VentaCreateOneSchema: z.ZodType<Prisma.VentaCreateArgs> = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), data: z.union([VentaCreateInputObjectSchema, VentaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VentaCreateArgs>;

export const VentaCreateOneZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), data: z.union([VentaCreateInputObjectSchema, VentaUncheckedCreateInputObjectSchema]) }).strict();