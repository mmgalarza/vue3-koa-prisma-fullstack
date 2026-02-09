import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateWithoutEmpresaInputObjectSchema as ProveedoresCreateWithoutEmpresaInputObjectSchema } from './ProveedoresCreateWithoutEmpresaInput.schema';
import { ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema as ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedCreateWithoutEmpresaInput.schema';
import { ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema as ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema } from './ProveedoresCreateOrConnectWithoutEmpresaInput.schema';
import { ProveedoresUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema as ProveedoresUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ProveedoresUpsertWithWhereUniqueWithoutEmpresaInput.schema';
import { ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema as ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema } from './ProveedoresCreateManyEmpresaInputEnvelope.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema';
import { ProveedoresUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema as ProveedoresUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema } from './ProveedoresUpdateWithWhereUniqueWithoutEmpresaInput.schema';
import { ProveedoresUpdateManyWithWhereWithoutEmpresaInputObjectSchema as ProveedoresUpdateManyWithWhereWithoutEmpresaInputObjectSchema } from './ProveedoresUpdateManyWithWhereWithoutEmpresaInput.schema';
import { ProveedoresScalarWhereInputObjectSchema as ProveedoresScalarWhereInputObjectSchema } from './ProveedoresScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProveedoresCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresCreateWithoutEmpresaInputObjectSchema).array(), z.lazy(() => ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProveedoresUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProveedoresCreateManyEmpresaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProveedoresWhereUniqueInputObjectSchema), z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProveedoresWhereUniqueInputObjectSchema), z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProveedoresWhereUniqueInputObjectSchema), z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProveedoresWhereUniqueInputObjectSchema), z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProveedoresUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProveedoresUpdateManyWithWhereWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUpdateManyWithWhereWithoutEmpresaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProveedoresScalarWhereInputObjectSchema), z.lazy(() => ProveedoresScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProveedoresUpdateManyWithoutEmpresaNestedInputObjectSchema: z.ZodType<Prisma.ProveedoresUpdateManyWithoutEmpresaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUpdateManyWithoutEmpresaNestedInput>;
export const ProveedoresUpdateManyWithoutEmpresaNestedInputObjectZodSchema = makeSchema();
