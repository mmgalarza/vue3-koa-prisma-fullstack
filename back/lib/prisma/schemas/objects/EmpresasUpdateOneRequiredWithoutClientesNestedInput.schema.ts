import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutClientesInputObjectSchema as EmpresasCreateWithoutClientesInputObjectSchema } from './EmpresasCreateWithoutClientesInput.schema';
import { EmpresasUncheckedCreateWithoutClientesInputObjectSchema as EmpresasUncheckedCreateWithoutClientesInputObjectSchema } from './EmpresasUncheckedCreateWithoutClientesInput.schema';
import { EmpresasCreateOrConnectWithoutClientesInputObjectSchema as EmpresasCreateOrConnectWithoutClientesInputObjectSchema } from './EmpresasCreateOrConnectWithoutClientesInput.schema';
import { EmpresasUpsertWithoutClientesInputObjectSchema as EmpresasUpsertWithoutClientesInputObjectSchema } from './EmpresasUpsertWithoutClientesInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutClientesInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutClientesInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutClientesInput.schema';
import { EmpresasUpdateWithoutClientesInputObjectSchema as EmpresasUpdateWithoutClientesInputObjectSchema } from './EmpresasUpdateWithoutClientesInput.schema';
import { EmpresasUncheckedUpdateWithoutClientesInputObjectSchema as EmpresasUncheckedUpdateWithoutClientesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutClientesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutClientesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutClientesInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutClientesInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutClientesInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutClientesNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutClientesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutClientesNestedInput>;
export const EmpresasUpdateOneRequiredWithoutClientesNestedInputObjectZodSchema = makeSchema();
