import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaCreateWithoutVentaInputObjectSchema as FacturaCreateWithoutVentaInputObjectSchema } from './FacturaCreateWithoutVentaInput.schema';
import { FacturaUncheckedCreateWithoutVentaInputObjectSchema as FacturaUncheckedCreateWithoutVentaInputObjectSchema } from './FacturaUncheckedCreateWithoutVentaInput.schema';
import { FacturaCreateOrConnectWithoutVentaInputObjectSchema as FacturaCreateOrConnectWithoutVentaInputObjectSchema } from './FacturaCreateOrConnectWithoutVentaInput.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './FacturaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FacturaCreateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedCreateWithoutVentaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FacturaCreateOrConnectWithoutVentaInputObjectSchema).optional(),
  connect: z.lazy(() => FacturaWhereUniqueInputObjectSchema).optional()
}).strict();
export const FacturaUncheckedCreateNestedOneWithoutVentaInputObjectSchema: z.ZodType<Prisma.FacturaUncheckedCreateNestedOneWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaUncheckedCreateNestedOneWithoutVentaInput>;
export const FacturaUncheckedCreateNestedOneWithoutVentaInputObjectZodSchema = makeSchema();
