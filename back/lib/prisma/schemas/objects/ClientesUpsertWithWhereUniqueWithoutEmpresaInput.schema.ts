import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema';
import { ClientesUpdateWithoutEmpresaInputObjectSchema as ClientesUpdateWithoutEmpresaInputObjectSchema } from './ClientesUpdateWithoutEmpresaInput.schema';
import { ClientesUncheckedUpdateWithoutEmpresaInputObjectSchema as ClientesUncheckedUpdateWithoutEmpresaInputObjectSchema } from './ClientesUncheckedUpdateWithoutEmpresaInput.schema';
import { ClientesCreateWithoutEmpresaInputObjectSchema as ClientesCreateWithoutEmpresaInputObjectSchema } from './ClientesCreateWithoutEmpresaInput.schema';
import { ClientesUncheckedCreateWithoutEmpresaInputObjectSchema as ClientesUncheckedCreateWithoutEmpresaInputObjectSchema } from './ClientesUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ClientesUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ClientesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ClientesUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpsertWithWhereUniqueWithoutEmpresaInput>;
export const ClientesUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
