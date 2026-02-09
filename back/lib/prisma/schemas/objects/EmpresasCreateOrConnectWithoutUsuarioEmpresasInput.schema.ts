import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedCreateWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutUsuarioEmpresasInput>;
export const EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
