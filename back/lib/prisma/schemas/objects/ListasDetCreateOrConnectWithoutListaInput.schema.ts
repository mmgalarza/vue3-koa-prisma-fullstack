import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetCreateWithoutListaInputObjectSchema as ListasDetCreateWithoutListaInputObjectSchema } from './ListasDetCreateWithoutListaInput.schema';
import { ListasDetUncheckedCreateWithoutListaInputObjectSchema as ListasDetUncheckedCreateWithoutListaInputObjectSchema } from './ListasDetUncheckedCreateWithoutListaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListasDetCreateWithoutListaInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutListaInputObjectSchema)])
}).strict();
export const ListasDetCreateOrConnectWithoutListaInputObjectSchema: z.ZodType<Prisma.ListasDetCreateOrConnectWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateOrConnectWithoutListaInput>;
export const ListasDetCreateOrConnectWithoutListaInputObjectZodSchema = makeSchema();
