import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema as EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema } from './EmpresasCreateNestedOneWithoutListasPvpInput.schema';
import { ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema as ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema),
  detalles: z.lazy(() => ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpCreateWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateWithoutVentasInput>;
export const ListaPvpCreateWithoutVentasInputObjectZodSchema = makeSchema();
