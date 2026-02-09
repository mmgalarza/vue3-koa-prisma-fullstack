import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetScalarWhereInputObjectSchema as VentaDetScalarWhereInputObjectSchema } from './VentaDetScalarWhereInput.schema';
import { VentaDetUpdateManyMutationInputObjectSchema as VentaDetUpdateManyMutationInputObjectSchema } from './VentaDetUpdateManyMutationInput.schema';
import { VentaDetUncheckedUpdateManyWithoutProductoInputObjectSchema as VentaDetUncheckedUpdateManyWithoutProductoInputObjectSchema } from './VentaDetUncheckedUpdateManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VentaDetUpdateManyMutationInputObjectSchema), z.lazy(() => VentaDetUncheckedUpdateManyWithoutProductoInputObjectSchema)])
}).strict();
export const VentaDetUpdateManyWithWhereWithoutProductoInputObjectSchema: z.ZodType<Prisma.VentaDetUpdateManyWithWhereWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetUpdateManyWithWhereWithoutProductoInput>;
export const VentaDetUpdateManyWithWhereWithoutProductoInputObjectZodSchema = makeSchema();
