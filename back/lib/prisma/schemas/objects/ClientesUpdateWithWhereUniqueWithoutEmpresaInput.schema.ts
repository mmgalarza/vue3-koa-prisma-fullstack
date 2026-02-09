import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema';
import { ClientesUpdateWithoutEmpresaInputObjectSchema as ClientesUpdateWithoutEmpresaInputObjectSchema } from './ClientesUpdateWithoutEmpresaInput.schema';
import { ClientesUncheckedUpdateWithoutEmpresaInputObjectSchema as ClientesUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ClientesUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ClientesUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ClientesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ClientesUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpdateWithWhereUniqueWithoutEmpresaInput>;
export const ClientesUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
