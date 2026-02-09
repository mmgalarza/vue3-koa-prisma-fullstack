import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { EmpresasUpdateWithoutListasPvpInputObjectSchema as EmpresasUpdateWithoutListasPvpInputObjectSchema } from './EmpresasUpdateWithoutListasPvpInput.schema';
import { EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema as EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedUpdateWithoutListasPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmpresasUpdateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema)])
}).strict();
export const EmpresasUpdateToOneWithWhereWithoutListasPvpInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutListasPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateToOneWithWhereWithoutListasPvpInput>;
export const EmpresasUpdateToOneWithWhereWithoutListasPvpInputObjectZodSchema = makeSchema();
