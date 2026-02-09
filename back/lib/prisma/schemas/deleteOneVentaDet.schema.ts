import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './objects/VentaDetSelect.schema';
import { VentaDetIncludeObjectSchema as VentaDetIncludeObjectSchema } from './objects/VentaDetInclude.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './objects/VentaDetWhereUniqueInput.schema';

export const VentaDetDeleteOneSchema: z.ZodType<Prisma.VentaDetDeleteArgs> = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), where: VentaDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VentaDetDeleteArgs>;

export const VentaDetDeleteOneZodSchema = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), where: VentaDetWhereUniqueInputObjectSchema }).strict();