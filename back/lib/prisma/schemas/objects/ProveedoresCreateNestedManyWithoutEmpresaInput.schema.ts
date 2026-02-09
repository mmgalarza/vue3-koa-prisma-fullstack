import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateWithoutEmpresaInputObjectSchema as ProveedoresCreateWithoutEmpresaInputObjectSchema } from './ProveedoresCreateWithoutEmpresaInput.schema';
import { ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema as ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedCreateWithoutEmpresaInput.schema';
import { ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema as ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema } from './ProveedoresCreateOrConnectWithoutEmpresaInput.schema';
import { ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema as ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema } from './ProveedoresCreateManyEmpresaInputEnvelope.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProveedoresCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProveedoresWhereUniqueInputObjectSchema), z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProveedoresCreateNestedManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ProveedoresCreateNestedManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateNestedManyWithoutEmpresaInput>;
export const ProveedoresCreateNestedManyWithoutEmpresaInputObjectZodSchema = makeSchema();
