import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { VentaUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema as VentaUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema } from './VentaUncheckedCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  idListaPvp: z.number().int().optional(),
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  idEmpresa: z.number().int(),
  ventas: z.lazy(() => VentaUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListaPvpUncheckedCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUncheckedCreateWithoutDetallesInput>;
export const ListaPvpUncheckedCreateWithoutDetallesInputObjectZodSchema = makeSchema();
