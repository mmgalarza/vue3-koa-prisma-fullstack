import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './ClientesWhereInput.schema';
import { ClientesUpdateWithoutVentasInputObjectSchema as ClientesUpdateWithoutVentasInputObjectSchema } from './ClientesUpdateWithoutVentasInput.schema';
import { ClientesUncheckedUpdateWithoutVentasInputObjectSchema as ClientesUncheckedUpdateWithoutVentasInputObjectSchema } from './ClientesUncheckedUpdateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientesUpdateWithoutVentasInputObjectSchema), z.lazy(() => ClientesUncheckedUpdateWithoutVentasInputObjectSchema)])
}).strict();
export const ClientesUpdateToOneWithWhereWithoutVentasInputObjectSchema: z.ZodType<Prisma.ClientesUpdateToOneWithWhereWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpdateToOneWithWhereWithoutVentasInput>;
export const ClientesUpdateToOneWithWhereWithoutVentasInputObjectZodSchema = makeSchema();
