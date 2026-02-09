import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateOrConnectWithoutUsuarioEmpresasInput.schema';
import { EmpresasUpsertWithoutUsuarioEmpresasInputObjectSchema as EmpresasUpsertWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUpsertWithoutUsuarioEmpresasInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInput.schema';
import { EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUpdateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutUsuarioEmpresasInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutUsuarioEmpresasInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInput>;
export const EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectZodSchema = makeSchema();
