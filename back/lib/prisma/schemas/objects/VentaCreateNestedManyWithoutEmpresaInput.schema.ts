import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutEmpresaInputObjectSchema as VentaCreateWithoutEmpresaInputObjectSchema } from './VentaCreateWithoutEmpresaInput.schema';
import { VentaUncheckedCreateWithoutEmpresaInputObjectSchema as VentaUncheckedCreateWithoutEmpresaInputObjectSchema } from './VentaUncheckedCreateWithoutEmpresaInput.schema';
import { VentaCreateOrConnectWithoutEmpresaInputObjectSchema as VentaCreateOrConnectWithoutEmpresaInputObjectSchema } from './VentaCreateOrConnectWithoutEmpresaInput.schema';
import { VentaCreateManyEmpresaInputEnvelopeObjectSchema as VentaCreateManyEmpresaInputEnvelopeObjectSchema } from './VentaCreateManyEmpresaInputEnvelope.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => VentaUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => VentaCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VentaCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.VentaCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateNestedManyWithoutEmpresaInput>;
export const VentaCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
