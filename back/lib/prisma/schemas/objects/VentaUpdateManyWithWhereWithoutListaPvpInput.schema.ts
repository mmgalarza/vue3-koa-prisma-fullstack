import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaScalarWhereInputObjectSchema as VentaScalarWhereInputObjectSchema } from './VentaScalarWhereInput.schema';
import { VentaUpdateManyMutationInputObjectSchema as VentaUpdateManyMutationInputObjectSchema } from './VentaUpdateManyMutationInput.schema';
import { VentaUncheckedUpdateManyWithoutListaPvpInputObjectSchema as VentaUncheckedUpdateManyWithoutListaPvpInputObjectSchema } from './VentaUncheckedUpdateManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VentaUpdateManyMutationInputObjectSchema), z.lazy(() => VentaUncheckedUpdateManyWithoutListaPvpInputObjectSchema)])
}).strict();
export const VentaUpdateManyWithWhereWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaUpdateManyWithWhereWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateManyWithWhereWithoutListaPvpInput>;
export const VentaUpdateManyWithWhereWithoutListaPvpInputObjectZodSchema = makeSchema();
