import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutVentasInputObjectSchema as EmpresasUpdateWithoutVentasInputObjectSchema } from './EmpresasUpdateWithoutVentasInput.schema';
import { EmpresasUncheckedUpdateWithoutVentasInputObjectSchema as EmpresasUncheckedUpdateWithoutVentasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutVentasInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutVentasInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutVentasInput>;
export const EmpresasUpdateToOneWithWhereWithoutVentasInputObjectZodSchema = makeSchema();
