import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema';
import { ClientesCreateWithoutVentasInputObjectSchema as ClientesCreateWithoutVentasInputObjectSchema } from './ClientesCreateWithoutVentasInput.schema';
import { ClientesUncheckedCreateWithoutVentasInputObjectSchema as ClientesUncheckedCreateWithoutVentasInputObjectSchema } from './ClientesUncheckedCreateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientesCreateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutVentasInputObjectSchema)])
}).strict();
export const ClientesCreateOrConnectWithoutVentasInputObjectSchema: z.ZodType<Prisma.ClientesCreateOrConnectWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCreateOrConnectWithoutVentasInput>;
export const ClientesCreateOrConnectWithoutVentasInputObjectZodSchema = makeSchema();
