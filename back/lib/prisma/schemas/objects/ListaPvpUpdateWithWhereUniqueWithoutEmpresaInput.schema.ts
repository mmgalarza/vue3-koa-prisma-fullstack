import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpUpdateWithoutEmpresaInputObjectSchema as ListaPvpUpdateWithoutEmpresaInputObjectSchema } from './ListaPvpUpdateWithoutEmpresaInput.schema';
import { ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema as ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ListaPvpUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ListaPvpUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateWithWhereUniqueWithoutEmpresaInput>;
export const ListaPvpUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
