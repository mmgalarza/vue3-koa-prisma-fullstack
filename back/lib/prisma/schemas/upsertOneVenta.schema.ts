import type { Prisma } from '../client';
import * as z from 'zod';
import { VentaSelectObjectSchema as VentaSelectObjectSchema } from './objects/VentaSelect.schema';
import { VentaIncludeObjectSchema as VentaIncludeObjectSchema } from './objects/VentaInclude.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './objects/VentaWhereUniqueInput.schema';
import { VentaCreateInputObjectSchema as VentaCreateInputObjectSchema } from './objects/VentaCreateInput.schema';
import { VentaUncheckedCreateInputObjectSchema as VentaUncheckedCreateInputObjectSchema } from './objects/VentaUncheckedCreateInput.schema';
import { VentaUpdateInputObjectSchema as VentaUpdateInputObjectSchema } from './objects/VentaUpdateInput.schema';
import { VentaUncheckedUpdateInputObjectSchema as VentaUncheckedUpdateInputObjectSchema } from './objects/VentaUncheckedUpdateInput.schema';

export const VentaUpsertOneSchema: z.ZodType<Prisma.VentaUpsertArgs> = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), where: VentaWhereUniqueInputObjectSchema, create: z.union([ VentaCreateInputObjectSchema, VentaUncheckedCreateInputObjectSchema ]), update: z.union([ VentaUpdateInputObjectSchema, VentaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VentaUpsertArgs>;

export const VentaUpsertOneZodSchema = z.object({ select: VentaSelectObjectSchema.optional(), include: VentaIncludeObjectSchema.optional(), where: VentaWhereUniqueInputObjectSchema, create: z.union([ VentaCreateInputObjectSchema, VentaUncheckedCreateInputObjectSchema ]), update: z.union([ VentaUpdateInputObjectSchema, VentaUncheckedUpdateInputObjectSchema ]) }).strict();