import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './objects/VentaDetSelect.schema';
import { VentaDetIncludeObjectSchema as VentaDetIncludeObjectSchema } from './objects/VentaDetInclude.schema';
import { VentaDetCreateInputObjectSchema as VentaDetCreateInputObjectSchema } from './objects/VentaDetCreateInput.schema';
import { VentaDetUncheckedCreateInputObjectSchema as VentaDetUncheckedCreateInputObjectSchema } from './objects/VentaDetUncheckedCreateInput.schema';

export const VentaDetCreateOneSchema: z.ZodType<Prisma.VentaDetCreateArgs> = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), data: z.union([VentaDetCreateInputObjectSchema, VentaDetUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VentaDetCreateArgs>;

export const VentaDetCreateOneZodSchema = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), data: z.union([VentaDetCreateInputObjectSchema, VentaDetUncheckedCreateInputObjectSchema]) }).strict();