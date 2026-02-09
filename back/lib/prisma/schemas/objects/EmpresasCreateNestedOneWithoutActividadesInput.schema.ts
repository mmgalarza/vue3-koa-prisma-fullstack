import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutActividadesInputObjectSchema as EmpresasCreateWithoutActividadesInputObjectSchema } from './EmpresasCreateWithoutActividadesInput.schema';
import { EmpresasUncheckedCreateWithoutActividadesInputObjectSchema as EmpresasUncheckedCreateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedCreateWithoutActividadesInput.schema';
import { EmpresasCreateOrConnectWithoutActividadesInputObjectSchema as EmpresasCreateOrConnectWithoutActividadesInputObjectSchema } from './EmpresasCreateOrConnectWithoutActividadesInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutActividadesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutActividadesInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutActividadesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutActividadesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutActividadesInput>;
export const EmpresasCreateNestedOneWithoutActividadesInputObjectZodSchema = makeSchema();
