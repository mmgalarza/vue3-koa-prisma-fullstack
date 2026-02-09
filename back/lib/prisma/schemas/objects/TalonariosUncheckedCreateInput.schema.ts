import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocUncheckedCreateNestedManyWithoutTalonarioInputObjectSchema as TiposDocUncheckedCreateNestedManyWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedCreateNestedManyWithoutTalonarioInput.schema'

const makeSchema = () => z.object({
  idTalon: z.number().int().optional(),
  nombre: z.string().max(50).optional(),
  inicio: z.number().int().optional(),
  fin: z.number().int().optional(),
  actual: z.number().int().optional(),
  tiposDoc: z.lazy(() => TiposDocUncheckedCreateNestedManyWithoutTalonarioInputObjectSchema).optional()
}).strict();
export const TalonariosUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TalonariosUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUncheckedCreateInput>;
export const TalonariosUncheckedCreateInputObjectZodSchema = makeSchema();
