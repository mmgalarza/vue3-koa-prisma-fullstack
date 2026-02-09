import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUpdateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutUsuarioEmpresasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInput>;
export const EmpresasUpdateToOneWithWhereWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
