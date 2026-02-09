import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaCreateWithoutEmpresaInputObjectSchema as VentaCreateWithoutEmpresaInputObjectSchema } from './VentaCreateWithoutEmpresaInput.schema';
import { VentaUncheckedCreateWithoutEmpresaInputObjectSchema as VentaUncheckedCreateWithoutEmpresaInputObjectSchema } from './VentaUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const VentaCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.VentaCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateOrConnectWithoutEmpresaInput>;
export const VentaCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
