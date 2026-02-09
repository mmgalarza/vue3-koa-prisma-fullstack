import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaUpdateWithoutVentaInputObjectSchema as FacturaUpdateWithoutVentaInputObjectSchema } from './FacturaUpdateWithoutVentaInput.schema';
import { FacturaUncheckedUpdateWithoutVentaInputObjectSchema as FacturaUncheckedUpdateWithoutVentaInputObjectSchema } from './FacturaUncheckedUpdateWithoutVentaInput.schema';
import { FacturaCreateWithoutVentaInputObjectSchema as FacturaCreateWithoutVentaInputObjectSchema } from './FacturaCreateWithoutVentaInput.schema';
import { FacturaUncheckedCreateWithoutVentaInputObjectSchema as FacturaUncheckedCreateWithoutVentaInputObjectSchema } from './FacturaUncheckedCreateWithoutVentaInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './FacturaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FacturaUpdateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedUpdateWithoutVentaInputObjectSchema)]),
  create: z.union([z.lazy(() => FacturaCreateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedCreateWithoutVentaInputObjectSchema)]),
  where: z.lazy(() => FacturaWhereInputObjectSchema).optional()
}).strict();
export const FacturaUpsertWithoutVentaInputObjectSchema: z.ZodType<Prisma.FacturaUpsertWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaUpsertWithoutVentaInput>;
export const FacturaUpsertWithoutVentaInputObjectZodSchema = makeSchema();
