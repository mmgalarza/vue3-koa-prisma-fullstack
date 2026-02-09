import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutVentasInputObjectSchema as EmpresasCreateWithoutVentasInputObjectSchema } from './EmpresasCreateWithoutVentasInput.schema';
import { EmpresasUncheckedCreateWithoutVentasInputObjectSchema as EmpresasUncheckedCreateWithoutVentasInputObjectSchema } from './EmpresasUncheckedCreateWithoutVentasInput.schema';
import { EmpresasCreateOrConnectWithoutVentasInputObjectSchema as EmpresasCreateOrConnectWithoutVentasInputObjectSchema } from './EmpresasCreateOrConnectWithoutVentasInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutVentasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutVentasInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutVentasInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutVentasInput>;
export const EmpresasCreateNestedOneWithoutVentasInputObjectZodSchema = makeSchema();
