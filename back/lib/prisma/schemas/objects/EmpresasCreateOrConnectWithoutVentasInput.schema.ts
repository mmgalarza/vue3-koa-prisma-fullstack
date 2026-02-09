import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutVentasInputObjectSchema as EmpresasCreateWithoutVentasInputObjectSchema } from './EmpresasCreateWithoutVentasInput.schema';
import { EmpresasUncheckedCreateWithoutVentasInputObjectSchema as EmpresasUncheckedCreateWithoutVentasInputObjectSchema } from './EmpresasUncheckedCreateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutVentasInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutVentasInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutVentasInput>;
export const EmpresasCreateOrConnectWithoutVentasInputObjectZodSchema = makeSchema();
