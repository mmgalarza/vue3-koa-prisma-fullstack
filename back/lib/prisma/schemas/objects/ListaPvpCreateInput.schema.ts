import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema as EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema } from './EmpresasCreateNestedOneWithoutListasPvpInput.schema';
import { ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema as ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateNestedManyWithoutListaPvpInput.schema';
import { VentaCreateNestedManyWithoutListaPvpInputObjectSchema as VentaCreateNestedManyWithoutListaPvpInputObjectSchema } from './VentaCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema),
  detalles: z.lazy(() => ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpCreateInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateInput>;
export const ListaPvpCreateInputObjectZodSchema = makeSchema();
