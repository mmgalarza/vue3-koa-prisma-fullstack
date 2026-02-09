import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './objects/FacturaInclude.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './objects/FacturaWhereUniqueInput.schema';
import { FacturaCreateInputObjectSchema as FacturaCreateInputObjectSchema } from './objects/FacturaCreateInput.schema';
import { FacturaUncheckedCreateInputObjectSchema as FacturaUncheckedCreateInputObjectSchema } from './objects/FacturaUncheckedCreateInput.schema';
import { FacturaUpdateInputObjectSchema as FacturaUpdateInputObjectSchema } from './objects/FacturaUpdateInput.schema';
import { FacturaUncheckedUpdateInputObjectSchema as FacturaUncheckedUpdateInputObjectSchema } from './objects/FacturaUncheckedUpdateInput.schema';

export const FacturaUpsertOneSchema: z.ZodType<Prisma.FacturaUpsertArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), where: FacturaWhereUniqueInputObjectSchema, create: z.union([ FacturaCreateInputObjectSchema, FacturaUncheckedCreateInputObjectSchema ]), update: z.union([ FacturaUpdateInputObjectSchema, FacturaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FacturaUpsertArgs>;

export const FacturaUpsertOneZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), where: FacturaWhereUniqueInputObjectSchema, create: z.union([ FacturaCreateInputObjectSchema, FacturaUncheckedCreateInputObjectSchema ]), update: z.union([ FacturaUpdateInputObjectSchema, FacturaUncheckedUpdateInputObjectSchema ]) }).strict();