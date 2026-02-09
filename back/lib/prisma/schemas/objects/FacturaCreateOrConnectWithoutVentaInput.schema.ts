import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './FacturaWhereUniqueInput.schema';
import { FacturaCreateWithoutVentaInputObjectSchema as FacturaCreateWithoutVentaInputObjectSchema } from './FacturaCreateWithoutVentaInput.schema';
import { FacturaUncheckedCreateWithoutVentaInputObjectSchema as FacturaUncheckedCreateWithoutVentaInputObjectSchema } from './FacturaUncheckedCreateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacturaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FacturaCreateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedCreateWithoutVentaInputObjectSchema)])
}).strict();
export const FacturaCreateOrConnectWithoutVentaInputObjectSchema: z.ZodType<Prisma.FacturaCreateOrConnectWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaCreateOrConnectWithoutVentaInput>;
export const FacturaCreateOrConnectWithoutVentaInputObjectZodSchema = makeSchema();
