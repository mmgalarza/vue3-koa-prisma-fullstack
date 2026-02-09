import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesUpdateWithoutVentasInputObjectSchema as ClientesUpdateWithoutVentasInputObjectSchema } from './ClientesUpdateWithoutVentasInput.schema';
import { ClientesUncheckedUpdateWithoutVentasInputObjectSchema as ClientesUncheckedUpdateWithoutVentasInputObjectSchema } from './ClientesUncheckedUpdateWithoutVentasInput.schema';
import { ClientesCreateWithoutVentasInputObjectSchema as ClientesCreateWithoutVentasInputObjectSchema } from './ClientesCreateWithoutVentasInput.schema';
import { ClientesUncheckedCreateWithoutVentasInputObjectSchema as ClientesUncheckedCreateWithoutVentasInputObjectSchema } from './ClientesUncheckedCreateWithoutVentasInput.schema';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './ClientesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientesUpdateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedUpdateWithoutVentasInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientesCreateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutVentasInputObjectSchema)]),
  where: z.lazy(() => ClientesWhereInputObjectSchema).optional()
}).strict();
export const ClientesUpsertWithoutVentasInputObjectSchema: z.ZodType<Prisma.ClientesUpsertWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpsertWithoutVentasInput>;
export const ClientesUpsertWithoutVentasInputObjectZodSchema = makeSchema();
