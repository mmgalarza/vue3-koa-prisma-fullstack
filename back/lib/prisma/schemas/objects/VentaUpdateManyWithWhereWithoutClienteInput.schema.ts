import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaScalarWhereInputObjectSchema as VentaScalarWhereInputObjectSchema } from './VentaScalarWhereInput.schema';
import { VentaUpdateManyMutationInputObjectSchema as VentaUpdateManyMutationInputObjectSchema } from './VentaUpdateManyMutationInput.schema';
import { VentaUncheckedUpdateManyWithoutClienteInputObjectSchema as VentaUncheckedUpdateManyWithoutClienteInputObjectSchema } from './VentaUncheckedUpdateManyWithoutClienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VentaUpdateManyMutationInputObjectSchema), z.lazy(() => VentaUncheckedUpdateManyWithoutClienteInputObjectSchema)])
}).strict();
export const VentaUpdateManyWithWhereWithoutClienteInputObjectSchema: z.ZodType<Prisma.VentaUpdateManyWithWhereWithoutClienteInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateManyWithWhereWithoutClienteInput>;
export const VentaUpdateManyWithWhereWithoutClienteInputObjectZodSchema = makeSchema();
