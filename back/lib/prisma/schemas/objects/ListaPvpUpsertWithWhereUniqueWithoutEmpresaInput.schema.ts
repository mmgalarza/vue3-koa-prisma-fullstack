import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpUpdateWithoutEmpresaInputObjectSchema as ListaPvpUpdateWithoutEmpresaInputObjectSchema } from './ListaPvpUpdateWithoutEmpresaInput.schema';
import { ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema as ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutEmpresaInput.schema';
import { ListaPvpCreateWithoutEmpresaInputObjectSchema as ListaPvpCreateWithoutEmpresaInputObjectSchema } from './ListaPvpCreateWithoutEmpresaInput.schema';
import { ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema as ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ListaPvpUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => ListaPvpCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ListaPvpUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpsertWithWhereUniqueWithoutEmpresaInput>;
export const ListaPvpUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
