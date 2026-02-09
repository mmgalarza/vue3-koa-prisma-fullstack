import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCreateWithoutVentasInputObjectSchema as ClientesCreateWithoutVentasInputObjectSchema } from './ClientesCreateWithoutVentasInput.schema';
import { ClientesUncheckedCreateWithoutVentasInputObjectSchema as ClientesUncheckedCreateWithoutVentasInputObjectSchema } from './ClientesUncheckedCreateWithoutVentasInput.schema';
import { ClientesCreateOrConnectWithoutVentasInputObjectSchema as ClientesCreateOrConnectWithoutVentasInputObjectSchema } from './ClientesCreateOrConnectWithoutVentasInput.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientesCreateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutVentasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientesCreateOrConnectWithoutVentasInputObjectSchema).optional(),
  connect: z.lazy(() => ClientesWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientesCreateNestedOneWithoutVentasInputObjectSchema: z.ZodType<Prisma.ClientesCreateNestedOneWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCreateNestedOneWithoutVentasInput>;
export const ClientesCreateNestedOneWithoutVentasInputObjectZodSchema = makeSchema();
