import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './objects/VentaDetSelect.schema';
import { VentaDetIncludeObjectSchema as VentaDetIncludeObjectSchema } from './objects/VentaDetInclude.schema';
import { VentaDetUpdateInputObjectSchema as VentaDetUpdateInputObjectSchema } from './objects/VentaDetUpdateInput.schema';
import { VentaDetUncheckedUpdateInputObjectSchema as VentaDetUncheckedUpdateInputObjectSchema } from './objects/VentaDetUncheckedUpdateInput.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './objects/VentaDetWhereUniqueInput.schema';

export const VentaDetUpdateOneSchema: z.ZodType<Prisma.VentaDetUpdateArgs> = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), data: z.union([VentaDetUpdateInputObjectSchema, VentaDetUncheckedUpdateInputObjectSchema]), where: VentaDetWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VentaDetUpdateArgs>;

export const VentaDetUpdateOneZodSchema = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), data: z.union([VentaDetUpdateInputObjectSchema, VentaDetUncheckedUpdateInputObjectSchema]), where: VentaDetWhereUniqueInputObjectSchema }).strict();