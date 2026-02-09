import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateOrConnectWithoutUsuarioEmpresasInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutUsuarioEmpresasInput>;
export const EmpresasCreateNestedOneWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
