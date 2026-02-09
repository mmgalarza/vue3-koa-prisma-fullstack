import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema as TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema } from './TalonariosCreateNestedOneWithoutTiposDocInput.schema';
import { RegistroCreateNestedManyWithoutTipoDocInputObjectSchema as RegistroCreateNestedManyWithoutTipoDocInputObjectSchema } from './RegistroCreateNestedManyWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3),
  nombre: z.string().max(80),
  movAlmacen: FlujoSchema.optional(),
  talonario: z.lazy(() => TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutTipoDocInputObjectSchema).optional()
}).strict();
export const TiposDocCreateInputObjectSchema: z.ZodType<Prisma.TiposDocCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateInput>;
export const TiposDocCreateInputObjectZodSchema = makeSchema();
