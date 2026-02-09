import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesScalarWhereInputObjectSchema as ClientesScalarWhereInputObjectSchema } from './ClientesScalarWhereInput.schema';
import { ClientesUpdateManyMutationInputObjectSchema as ClientesUpdateManyMutationInputObjectSchema } from './ClientesUpdateManyMutationInput.schema';
import { ClientesUncheckedUpdateManyWithoutEmpresaInputObjectSchema as ClientesUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './ClientesUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ClientesUpdateManyMutationInputObjectSchema), z.lazy(() => ClientesUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const ClientesUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ClientesUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesUpdateManyWithWhereWithoutEmpresaInput>;
export const ClientesUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
