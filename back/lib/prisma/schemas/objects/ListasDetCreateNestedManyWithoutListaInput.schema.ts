import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateWithoutListaInputObjectSchema as ListasDetCreateWithoutListaInputObjectSchema } from './ListasDetCreateWithoutListaInput.schema';
import { ListasDetUncheckedCreateWithoutListaInputObjectSchema as ListasDetUncheckedCreateWithoutListaInputObjectSchema } from './ListasDetUncheckedCreateWithoutListaInput.schema';
import { ListasDetCreateOrConnectWithoutListaInputObjectSchema as ListasDetCreateOrConnectWithoutListaInputObjectSchema } from './ListasDetCreateOrConnectWithoutListaInput.schema';
import { ListasDetCreateManyListaInputEnvelopeObjectSchema as ListasDetCreateManyListaInputEnvelopeObjectSchema } from './ListasDetCreateManyListaInputEnvelope.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasDetCreateWithoutListaInputObjectSchema), z.lazy(() => ListasDetCreateWithoutListaInputObjectSchema).array(), z.lazy(() => ListasDetUncheckedCreateWithoutListaInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutListaInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListasDetCreateOrConnectWithoutListaInputObjectSchema), z.lazy(() => ListasDetCreateOrConnectWithoutListaInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListasDetCreateManyListaInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ListasDetCreateNestedManyWithoutListaInputObjectSchema: z.ZodType<Prisma.ListasDetCreateNestedManyWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateNestedManyWithoutListaInput>;
export const ListasDetCreateNestedManyWithoutListaInputObjectZodSchema = makeSchema();
