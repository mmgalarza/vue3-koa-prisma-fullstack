import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateWithoutEmpresaInputObjectSchema as VentaUpdateWithoutEmpresaInputObjectSchema } from './VentaUpdateWithoutEmpresaInput.schema';
import { VentaUncheckedUpdateWithoutEmpresaInputObjectSchema as VentaUncheckedUpdateWithoutEmpresaInputObjectSchema } from './VentaUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VentaUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const VentaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.VentaUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateWithWhereUniqueWithoutEmpresaInput>;
export const VentaUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
