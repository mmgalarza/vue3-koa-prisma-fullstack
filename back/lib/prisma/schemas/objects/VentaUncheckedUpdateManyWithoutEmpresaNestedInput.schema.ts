import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutEmpresaInputObjectSchema as VentaCreateWithoutEmpresaInputObjectSchema } from './VentaCreateWithoutEmpresaInput.schema';
import { VentaUncheckedCreateWithoutEmpresaInputObjectSchema as VentaUncheckedCreateWithoutEmpresaInputObjectSchema } from './VentaUncheckedCreateWithoutEmpresaInput.schema';
import { VentaCreateOrConnectWithoutEmpresaInputObjectSchema as VentaCreateOrConnectWithoutEmpresaInputObjectSchema } from './VentaCreateOrConnectWithoutEmpresaInput.schema';
import { VentaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as VentaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './VentaUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { VentaCreateManyEmpresaInputEnvelopeObjectSchema as VentaCreateManyEmpresaInputEnvelopeObjectSchema } from './VentaCreateManyEmpresaInputEnvelope.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as VentaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './VentaUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { VentaUpdateManyWithWhereWithoutEmpresaInputObjectSchema as VentaUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './VentaUpdateManyWithWhereWithoutEmpresaInput.schema';
import { VentaScalarWhereInputObjectSchema as VentaScalarWhereInputObjectSchema } from './VentaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => VentaUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => VentaCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VentaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VentaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VentaUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VentaScalarWhereInputObjectSchema), z.lazy(() => VentaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VentaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.VentaUncheckedUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedUpdateManyWithoutEmpresaNestedInput>;
export const VentaUncheckedUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
