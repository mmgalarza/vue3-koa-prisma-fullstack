import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateWithoutListaInputObjectSchema as ListasDetCreateWithoutListaInputObjectSchema } from './ListasDetCreateWithoutListaInput.schema';
import { ListasDetUncheckedCreateWithoutListaInputObjectSchema as ListasDetUncheckedCreateWithoutListaInputObjectSchema } from './ListasDetUncheckedCreateWithoutListaInput.schema';
import { ListasDetCreateOrConnectWithoutListaInputObjectSchema as ListasDetCreateOrConnectWithoutListaInputObjectSchema } from './ListasDetCreateOrConnectWithoutListaInput.schema';
import { ListasDetUpsertWithWhereUniqueWithoutListaInputObjectSchema as ListasDetUpsertWithWhereUniqueWithoutListaInputObjectSchema } from './ListasDetUpsertWithWhereUniqueWithoutListaInput.schema';
import { ListasDetCreateManyListaInputEnvelopeObjectSchema as ListasDetCreateManyListaInputEnvelopeObjectSchema } from './ListasDetCreateManyListaInputEnvelope.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetUpdateWithWhereUniqueWithoutListaInputObjectSchema as ListasDetUpdateWithWhereUniqueWithoutListaInputObjectSchema } from './ListasDetUpdateWithWhereUniqueWithoutListaInput.schema';
import { ListasDetUpdateManyWithWhereWithoutListaInputObjectSchema as ListasDetUpdateManyWithWhereWithoutListaInputObjectSchema } from './ListasDetUpdateManyWithWhereWithoutListaInput.schema';
import { ListasDetScalarWhereInputObjectSchema as ListasDetScalarWhereInputObjectSchema } from './ListasDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasDetCreateWithoutListaInputObjectSchema), z.lazy(() => ListasDetCreateWithoutListaInputObjectSchema).array(), z.lazy(() => ListasDetUncheckedCreateWithoutListaInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutListaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListasDetCreateOrConnectWithoutListaInputObjectSchema), z.lazy(() => ListasDetCreateOrConnectWithoutListaInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ListasDetUpsertWithWhereUniqueWithoutListaInputObjectSchema), z.lazy(() => ListasDetUpsertWithWhereUniqueWithoutListaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListasDetCreateManyListaInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ListasDetUpdateWithWhereUniqueWithoutListaInputObjectSchema), z.lazy(() => ListasDetUpdateWithWhereUniqueWithoutListaInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ListasDetUpdateManyWithWhereWithoutListaInputObjectSchema), z.lazy(() => ListasDetUpdateManyWithWhereWithoutListaInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ListasDetScalarWhereInputObjectSchema), z.lazy(() => ListasDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ListasDetUncheckedUpdateManyWithoutListaNestedInputObjectSchema: z.ZodType<Prisma.ListasDetUncheckedUpdateManyWithoutListaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUncheckedUpdateManyWithoutListaNestedInput>;
export const ListasDetUncheckedUpdateManyWithoutListaNestedInputObjectZodSchema = makeSchema();
