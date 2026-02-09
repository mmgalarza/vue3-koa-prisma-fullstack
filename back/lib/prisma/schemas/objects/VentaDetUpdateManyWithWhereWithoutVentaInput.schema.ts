import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetScalarWhereInputObjectSchema as VentaDetScalarWhereInputObjectSchema } from './VentaDetScalarWhereInput.schema';
import { VentaDetUpdateManyMutationInputObjectSchema as VentaDetUpdateManyMutationInputObjectSchema } from './VentaDetUpdateManyMutationInput.schema';
import { VentaDetUncheckedUpdateManyWithoutVentaInputObjectSchema as VentaDetUncheckedUpdateManyWithoutVentaInputObjectSchema } from './VentaDetUncheckedUpdateManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VentaDetUpdateManyMutationInputObjectSchema), z.lazy(() => VentaDetUncheckedUpdateManyWithoutVentaInputObjectSchema)])
}).strict();
export const VentaDetUpdateManyWithWhereWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateManyWithWhereWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateManyWithWhereWithoutVentaInput>;
export const VentaDetUpdateManyWithWhereWithoutVentaInputObjectZodSchema = makeSchema();
