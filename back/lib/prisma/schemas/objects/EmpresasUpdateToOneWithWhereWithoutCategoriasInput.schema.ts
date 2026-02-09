import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutCategoriasInputObjectSchema as EmpresasUpdateWithoutCategoriasInputObjectSchema } from './EmpresasUpdateWithoutCategoriasInput.schema';
import { EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema as EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutCategoriasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutCategoriasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutCategoriasInput>;
export const EmpresasUpdateToOneWithWhereWithoutCategoriasInputObjectZodSchema = makeSchema();
