import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCreateWithoutVentasInputObjectSchema as ClientesCreateWithoutVentasInputObjectSchema } from './ClientesCreateWithoutVentasInput.schema';
import { ClientesUncheckedCreateWithoutVentasInputObjectSchema as ClientesUncheckedCreateWithoutVentasInputObjectSchema } from './ClientesUncheckedCreateWithoutVentasInput.schema';
import { ClientesCreateOrConnectWithoutVentasInputObjectSchema as ClientesCreateOrConnectWithoutVentasInputObjectSchema } from './ClientesCreateOrConnectWithoutVentasInput.schema';
import { ClientesUpsertWithoutVentasInputObjectSchema as ClientesUpsertWithoutVentasInputObjectSchema } from './ClientesUpsertWithoutVentasInput.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema';
import { ClientesUpdateToOneWithWhereWithoutVentasInputObjectSchema as ClientesUpdateToOneWithWhereWithoutVentasInputObjectSchema } from './ClientesUpdateToOneWithWhereWithoutVentasInput.schema';
import { ClientesUpdateWithoutVentasInputObjectSchema as ClientesUpdateWithoutVentasInputObjectSchema } from './ClientesUpdateWithoutVentasInput.schema';
import { ClientesUncheckedUpdateWithoutVentasInputObjectSchema as ClientesUncheckedUpdateWithoutVentasInputObjectSchema } from './ClientesUncheckedUpdateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientesCreateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutVentasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientesCreateOrConnectWithoutVentasInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientesUpsertWithoutVentasInputObjectSchema).optional(),
  connect: z.lazy(() => ClientesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientesUpdateToOneWithWhereWithoutVentasInputObjectSchema), z.lazy(() => ClientesUpdateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedUpdateWithoutVentasInputObjectSchema)]).optional()
}).strict();
export const ClientesUpdateOneRequiredWithoutVentasNestedInputObjectSchema: z.ZodType<Prisma.ClientesUpdateOneRequiredWithoutVentasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpdateOneRequiredWithoutVentasNestedInput>;
export const ClientesUpdateOneRequiredWithoutVentasNestedInputObjectZodSchema = makeSchema();
