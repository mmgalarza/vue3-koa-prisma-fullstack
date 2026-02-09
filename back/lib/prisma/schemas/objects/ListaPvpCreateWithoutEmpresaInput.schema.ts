import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema as ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateNestedManyWithoutListaPvpInput.schema';
import { VentaCreateNestedManyWithoutListaPvpInputObjectSchema as VentaCreateNestedManyWithoutListaPvpInputObjectSchema } from './VentaCreateNestedManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  detalles: z.lazy(() => ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaCreateNestedManyWithoutListaPvpInputObjectSchema).optional()
}).strict();
export const ListaPvpCreateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateWithoutEmpresaInput>;
export const ListaPvpCreateWithoutEmpresaInputObjectZodSchema = makeSchema();
