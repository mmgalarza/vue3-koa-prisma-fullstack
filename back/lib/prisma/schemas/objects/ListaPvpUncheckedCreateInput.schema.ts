import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInput.schema';
import { VentaUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema as VentaUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema } from './VentaUncheckedCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  idListaPvp: z.number().int().optional(),
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  idEmpresa: z.number().int(),
  detalles: z.lazy(() => ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ListaPvpUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUncheckedCreateInput>;
export const ListaPvpUncheckedCreateInputObjectZodSchema = makeSchema();
