import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutActividadesInputObjectSchema as EmpresasUpdateWithoutActividadesInputObjectSchema } from './EmpresasUpdateWithoutActividadesInput.schema';
import { EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema as EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutActividadesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutActividadesInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutActividadesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutActividadesInput>;
export const EmpresasUpdateToOneWithWhereWithoutActividadesInputObjectZodSchema = makeSchema();
