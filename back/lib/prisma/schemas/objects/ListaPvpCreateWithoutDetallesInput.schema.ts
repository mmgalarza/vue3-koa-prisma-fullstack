import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema as EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema } from './EmpresasCreateNestedOneWithoutListasPvpInput.schema';
import { VentaCreateNestedManyWithoutListaPvpInputObjectSchema as VentaCreateNestedManyWithoutListaPvpInputObjectSchema } from './VentaCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema),
  ventas: z.lazy(() => VentaCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateWithoutDetallesInput>;
export const ListaPvpCreateWithoutDetallesInputObjectZodSchema = makeSchema();
