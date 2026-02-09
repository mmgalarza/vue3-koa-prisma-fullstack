import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema';
import { ProveedoresUpdateWithoutEmpresaInputObjectSchema as ProveedoresUpdateWithoutEmpresaInputObjectSchema } from './ProveedoresUpdateWithoutEmpresaInput.schema';
import { ProveedoresUncheckedUpdateWithoutEmpresaInputObjectSchema as ProveedoresUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProveedoresWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProveedoresUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ProveedoresUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ProveedoresUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUpdateWithWhereUniqueWithoutEmpresaInput>;
export const ProveedoresUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
