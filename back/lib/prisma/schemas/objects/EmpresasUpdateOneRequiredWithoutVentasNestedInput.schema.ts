import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutVentasInputObjectSchema as EmpresasCreateWithoutVentasInputObjectSchema } from './EmpresasCreateWithoutVentasInput.schema';
import { EmpresasUncheckedCreateWithoutVentasInputObjectSchema as EmpresasUncheckedCreateWithoutVentasInputObjectSchema } from './EmpresasUncheckedCreateWithoutVentasInput.schema';
import { EmpresasCreateOrConnectWithoutVentasInputObjectSchema as EmpresasCreateOrConnectWithoutVentasInputObjectSchema } from './EmpresasCreateOrConnectWithoutVentasInput.schema';
import { EmpresasUpsertWithoutVentasInputObjectSchema as EmpresasUpsertWithoutVentasInputObjectSchema } from './EmpresasUpsertWithoutVentasInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutVentasInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutVentasInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutVentasInput.schema';
import { EmpresasUpdateWithoutVentasInputObjectSchema as EmpresasUpdateWithoutVentasInputObjectSchema } from './EmpresasUpdateWithoutVentasInput.schema';
import { EmpresasUncheckedUpdateWithoutVentasInputObjectSchema as EmpresasUncheckedUpdateWithoutVentasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutVentasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutVentasInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutVentasInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutVentasInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutVentasNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutVentasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutVentasNestedInput>;
export const EmpresasUpdateOneRequiredWithoutVentasNestedInputObjectZodSchema = makeSchema();
