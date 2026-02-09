import type { Prisma } from '../client';
import * as z from 'zod';
import { FacturaSelectObjectSchema as FacturaSelectObjectSchema } from './objects/FacturaSelect.schema';
import { FacturaIncludeObjectSchema as FacturaIncludeObjectSchema } from './objects/FacturaInclude.schema';
import { FacturaCreateInputObjectSchema as FacturaCreateInputObjectSchema } from './objects/FacturaCreateInput.schema';
import { FacturaUncheckedCreateInputObjectSchema as FacturaUncheckedCreateInputObjectSchema } from './objects/FacturaUncheckedCreateInput.schema';

export const FacturaCreateOneSchema: z.ZodType<Prisma.FacturaCreateArgs> = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), data: z.union([FacturaCreateInputObjectSchema, FacturaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FacturaCreateArgs>;

export const FacturaCreateOneZodSchema = z.object({ select: FacturaSelectObjectSchema.optional(), include: FacturaIncludeObjectSchema.optional(), data: z.union([FacturaCreateInputObjectSchema, FacturaUncheckedCreateInputObjectSchema]) }).strict();