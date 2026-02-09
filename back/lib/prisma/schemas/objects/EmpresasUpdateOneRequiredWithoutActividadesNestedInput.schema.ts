import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutActividadesInputObjectSchema as EmpresasCreateWithoutActividadesInputObjectSchema } from './EmpresasCreateWithoutActividadesInput.schema';
import { EmpresasUncheckedCreateWithoutActividadesInputObjectSchema as EmpresasUncheckedCreateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedCreateWithoutActividadesInput.schema';
import { EmpresasCreateOrConnectWithoutActividadesInputObjectSchema as EmpresasCreateOrConnectWithoutActividadesInputObjectSchema } from './EmpresasCreateOrConnectWithoutActividadesInput.schema';
import { EmpresasUpsertWithoutActividadesInputObjectSchema as EmpresasUpsertWithoutActividadesInputObjectSchema } from './EmpresasUpsertWithoutActividadesInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutActividadesInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutActividadesInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutActividadesInput.schema';
import { EmpresasUpdateWithoutActividadesInputObjectSchema as EmpresasUpdateWithoutActividadesInputObjectSchema } from './EmpresasUpdateWithoutActividadesInput.schema';
import { EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema as EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutActividadesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutActividadesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutActividadesInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutActividadesInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutActividadesNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutActividadesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutActividadesNestedInput>;
export const EmpresasUpdateOneRequiredWithoutActividadesNestedInputObjectZodSchema = makeSchema();
