import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithoutEmpresaInputObjectSchema as VentaUpdateWithoutEmpresaInputObjectSchema } from './VentaUpdateWithoutEmpresaInput.schema';
import { VentaUncheckedUpdateWithoutEmpresaInputObjectSchema as VentaUncheckedUpdateWithoutEmpresaInputObjectSchema } from './VentaUncheckedUpdateWithoutEmpresaInput.schema';
import { VentaCreateWithoutEmpresaInputObjectSchema as VentaCreateWithoutEmpresaInputObjectSchema } from './VentaCreateWithoutEmpresaInput.schema';
import { VentaUncheckedCreateWithoutEmpresaInputObjectSchema as VentaUncheckedCreateWithoutEmpresaInputObjectSchema } from './VentaUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VentaUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => VentaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const VentaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.VentaUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpsertWithWhereUniqueWithoutEmpresaInput>;
export const VentaUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
