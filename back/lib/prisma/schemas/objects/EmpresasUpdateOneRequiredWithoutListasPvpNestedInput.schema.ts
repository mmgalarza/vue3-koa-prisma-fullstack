import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutListasPvpInputObjectSchema as EmpresasCreateWithoutListasPvpInputObjectSchema } from './EmpresasCreateWithoutListasPvpInput.schema';
import { EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema as EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedCreateWithoutListasPvpInput.schema';
import { EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema as EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema } from './EmpresasCreateOrConnectWithoutListasPvpInput.schema';
import { EmpresasUpsertWithoutListasPvpInputObjectSchema as EmpresasUpsertWithoutListasPvpInputObjectSchema } from './EmpresasUpsertWithoutListasPvpInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutListasPvpInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutListasPvpInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutListasPvpInput.schema';
import { EmpresasUpdateWithoutListasPvpInputObjectSchema as EmpresasUpdateWithoutListasPvpInputObjectSchema } from './EmpresasUpdateWithoutListasPvpInput.schema';
import { EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema as EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedUpdateWithoutListasPvpInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutListasPvpInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutListasPvpNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutListasPvpNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutListasPvpNestedInput>;
export const EmpresasUpdateOneRequiredWithoutListasPvpNestedInputObjectZodSchema = makeSchema();
