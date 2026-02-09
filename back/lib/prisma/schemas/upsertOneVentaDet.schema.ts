import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaDetSelectObjectSchema as VentaDetSelectObjectSchema } from './objects/VentaDetSelect.schema';
import { VentaDetIncludeObjectSchema as VentaDetIncludeObjectSchema } from './objects/VentaDetInclude.schema';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './objects/VentaDetWhereUniqueInput.schema';
import { VentaDetCreateInputObjectSchema as VentaDetCreateInputObjectSchema } from './objects/VentaDetCreateInput.schema';
import { VentaDetUncheckedCreateInputObjectSchema as VentaDetUncheckedCreateInputObjectSchema } from './objects/VentaDetUncheckedCreateInput.schema';
import { VentaDetUpdateInputObjectSchema as VentaDetUpdateInputObjectSchema } from './objects/VentaDetUpdateInput.schema';
import { VentaDetUncheckedUpdateInputObjectSchema as VentaDetUncheckedUpdateInputObjectSchema } from './objects/VentaDetUncheckedUpdateInput.schema';

export const VentaDetUpsertOneSchema: z.ZodType<Prisma.VentaDetUpsertArgs> = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), where: VentaDetWhereUniqueInputObjectSchema, create: z.union([ VentaDetCreateInputObjectSchema, VentaDetUncheckedCreateInputObjectSchema ]), update: z.union([ VentaDetUpdateInputObjectSchema, VentaDetUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VentaDetUpsertArgs>;

export const VentaDetUpsertOneZodSchema = z.object({ select: VentaDetSelectObjectSchema.optional(), include: VentaDetIncludeObjectSchema.optional(), where: VentaDetWhereUniqueInputObjectSchema, create: z.union([ VentaDetCreateInputObjectSchema, VentaDetUncheckedCreateInputObjectSchema ]), update: z.union([ VentaDetUpdateInputObjectSchema, VentaDetUncheckedUpdateInputObjectSchema ]) }).strict();