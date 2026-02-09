import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateNestedManyWithoutTalonarioInputObjectSchema as TiposDocCreateNestedManyWithoutTalonarioInputObjectSchema } from './TiposDocCreateNestedManyWithoutTalonarioInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(50).optional(),
  inicio: z.number().int().optional(),
  fin: z.number().int().optional(),
  actual: z.number().int().optional(),
  tiposDoc: z.lazy(() => TiposDocCreateNestedManyWithoutTalonarioInputObjectSchema).optional()
}).strict();
export const TalonariosCreateInputObjectSchema: z.ZodType<Prisma.TalonariosCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCreateInput>;
export const TalonariosCreateInputObjectZodSchema = makeSchema();
