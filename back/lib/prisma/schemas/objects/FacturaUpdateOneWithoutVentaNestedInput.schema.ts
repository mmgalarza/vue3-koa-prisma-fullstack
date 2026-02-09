import * as z from 'zod';
import type { Prisma } from '../../client';
import { FacturaCreateWithoutVentaInputObjectSchema as FacturaCreateWithoutVentaInputObjectSchema } from './FacturaCreateWithoutVentaInput.schema';
import { FacturaUncheckedCreateWithoutVentaInputObjectSchema as FacturaUncheckedCreateWithoutVentaInputObjectSchema } from './FacturaUncheckedCreateWithoutVentaInput.schema';
import { FacturaCreateOrConnectWithoutVentaInputObjectSchema as FacturaCreateOrConnectWithoutVentaInputObjectSchema } from './FacturaCreateOrConnectWithoutVentaInput.schema';
import { FacturaUpsertWithoutVentaInputObjectSchema as FacturaUpsertWithoutVentaInputObjectSchema } from './FacturaUpsertWithoutVentaInput.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './FacturaWhereInput.schema';
import { FacturaWhereUniqueInputObjectSchema as FacturaWhereUniqueInputObjectSchema } from './FacturaWhereUniqueInput.schema';
import { FacturaUpdateToOneWithWhereWithoutVentaInputObjectSchema as FacturaUpdateToOneWithWhereWithoutVentaInputObjectSchema } from './FacturaUpdateToOneWithWhereWithoutVentaInput.schema';
import { FacturaUpdateWithoutVentaInputObjectSchema as FacturaUpdateWithoutVentaInputObjectSchema } from './FacturaUpdateWithoutVentaInput.schema';
import { FacturaUncheckedUpdateWithoutVentaInputObjectSchema as FacturaUncheckedUpdateWithoutVentaInputObjectSchema } from './FacturaUncheckedUpdateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FacturaCreateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedCreateWithoutVentaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FacturaCreateOrConnectWithoutVentaInputObjectSchema).optional(),
  upsert: z.lazy(() => FacturaUpsertWithoutVentaInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => FacturaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => FacturaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => FacturaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FacturaUpdateToOneWithWhereWithoutVentaInputObjectSchema), z.lazy(() => FacturaUpdateWithoutVentaInputObjectSchema), z.lazy(() => FacturaUncheckedUpdateWithoutVentaInputObjectSchema)]).optional()
}).strict();
export const FacturaUpdateOneWithoutVentaNestedInputObjectSchema: z.ZodType<Prisma.FacturaUpdateOneWithoutVentaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FacturaUpdateOneWithoutVentaNestedInput>;
export const FacturaUpdateOneWithoutVentaNestedInputObjectZodSchema = makeSchema();
