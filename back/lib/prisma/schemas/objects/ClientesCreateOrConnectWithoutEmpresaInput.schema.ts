import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereUniqueInputObjectSchema as ClientesWhereUniqueInputObjectSchema } from './ClientesWhereUniqueInput.schema';
import { ClientesCreateWithoutEmpresaInputObjectSchema as ClientesCreateWithoutEmpresaInputObjectSchema } from './ClientesCreateWithoutEmpresaInput.schema';
import { ClientesUncheckedCreateWithoutEmpresaInputObjectSchema as ClientesUncheckedCreateWithoutEmpresaInputObjectSchema } from './ClientesUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ClientesUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ClientesCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ClientesCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesCreateOrConnectWithoutEmpresaInput>;
export const ClientesCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
