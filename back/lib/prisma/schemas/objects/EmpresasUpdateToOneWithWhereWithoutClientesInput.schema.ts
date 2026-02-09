import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutClientesInputObjectSchema as EmpresasUpdateWithoutClientesInputObjectSchema } from './EmpresasUpdateWithoutClientesInput.schema';
import { EmpresasUncheckedUpdateWithoutClientesInputObjectSchema as EmpresasUncheckedUpdateWithoutClientesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutClientesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutClientesInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutClientesInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutClientesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutClientesInput>;
export const EmpresasUpdateToOneWithWhereWithoutClientesInputObjectZodSchema = makeSchema();
