import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  idListaPvp: z.number().int().optional(),
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  idEmpresa: z.number().int(),
  detalles: z.lazy(() => ListaPvpDetUncheckedCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpUncheckedCreateWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpUncheckedCreateWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUncheckedCreateWithoutVentasInput>;
export const ListaPvpUncheckedCreateWithoutVentasInputObjectZodSchema = makeSchema();
