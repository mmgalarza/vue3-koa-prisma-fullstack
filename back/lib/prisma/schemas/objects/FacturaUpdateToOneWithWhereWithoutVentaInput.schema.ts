import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './FacturaWhereInput.schema';
import { FacturaUpdateWithoutVentaInputObjectSchema as FacturaUpdateWithoutVentaInputObjectSchema } from './FacturaUpdateWithoutVentaInput.schema';
import { FacturaUncheckedUpdateWithoutVentaInputObjectSchema as FacturaUncheckedUpdateWithoutVentaInputObjectSchema } from './FacturaUncheckedUpdateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacturaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FacturaUpdateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedUpdateWithoutVentaInputObjectSchema)])
}).strict();
export const FacturaUpdateToOneWithWhereWithoutVentaInputObjectSchema: z.ZodType<Prisma.FacturaUpdateToOneWithWhereWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaUpdateToOneWithWhereWithoutVentaInput>;
export const FacturaUpdateToOneWithWhereWithoutVentaInputObjectZodSchema = makeSchema();
