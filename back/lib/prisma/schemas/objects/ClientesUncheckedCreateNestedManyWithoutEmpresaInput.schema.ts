import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesCreateWithoutEmpresaInputObjectSchema as ClientesCreateWithoutEmpresaInputObjectSchema } from './ClientesCreateWithoutEmpresaInput.schema';
import { ClientesUncheckedCreateWithoutEmpresaInputObjectSchema as ClientesUncheckedCreateWithoutEmpresaInputObjectSchema } from './ClientesUncheckedCreateWithoutEmpresaInput.schema';
import { ClientesCreateOrConnectWithoutEmpresaInputObjectSchema as ClientesCreateOrConnectWithoutEmpresaInputObjectSchema } from './ClientesCreateOrConnectWithoutEmpresaInput.schema';
import { ClientesCreateManyEmpresaInputEnvelopeObjectSchema as ClientesCreateManyEmpresaInputEnvelopeObjectSchema } from './ClientesCreateManyEmpresaInputEnvelope.schema';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ClientesUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClientesCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ClientesCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ClientesWhereUniqueInputObjectSchema), z.lazy(() => ClientesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ClientesUncheckedCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUncheckedCreateNestedManyWithoutEmpresaInput>;
export const ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
