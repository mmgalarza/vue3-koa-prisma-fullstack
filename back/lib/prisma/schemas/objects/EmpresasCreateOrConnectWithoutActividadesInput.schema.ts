import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutActividadesInputObjectSchema as EmpresasCreateWithoutActividadesInputObjectSchema } from './EmpresasCreateWithoutActividadesInput.schema';
import { EmpresasUncheckedCreateWithoutActividadesInputObjectSchema as EmpresasUncheckedCreateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedCreateWithoutActividadesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutActividadesInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutActividadesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutActividadesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutActividadesInput>;
export const EmpresasCreateOrConnectWithoutActividadesInputObjectZodSchema = makeSchema();
