import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpCreateWithoutEmpresaInputObjectSchema as ListaPvpCreateWithoutEmpresaInputObjectSchema } from './ListaPvpCreateWithoutEmpresaInput.schema';
import { ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema as ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListaPvpCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ListaPvpCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateOrConnectWithoutEmpresaInput>;
export const ListaPvpCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
