import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutProveedoresInputObjectSchema as EmpresasUpdateWithoutProveedoresInputObjectSchema } from './EmpresasUpdateWithoutProveedoresInput.schema';
import { EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema as EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedUpdateWithoutProveedoresInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutProveedoresInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutProveedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutProveedoresInput>;
export const EmpresasUpdateToOneWithWhereWithoutProveedoresInputObjectZodSchema = makeSchema();
