import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaScalarWhereInputObjectSchema as VentaScalarWhereInputObjectSchema } from './VentaScalarWhereInput.schema';
import { VentaUpdateManyMutationInputObjectSchema as VentaUpdateManyMutationInputObjectSchema } from './VentaUpdateManyMutationInput.schema';
import { VentaUncheckedUpdateManyWithoutEmpresaInputObjectSchema as VentaUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './VentaUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VentaUpdateManyMutationInputObjectSchema), z.lazy(() => VentaUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const VentaUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.VentaUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateManyWithWhereWithoutEmpresaInput>;
export const VentaUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
