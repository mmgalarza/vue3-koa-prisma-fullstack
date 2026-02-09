import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutActividadesInputObjectSchema as EmpresasCreateNestedOneWithoutActividadesInputObjectSchema } from './EmpresasCreateNestedOneWithoutActividadesInput.schema';
import { RegistroCreateNestedManyWithoutActividadInputObjectSchema as RegistroCreateNestedManyWithoutActividadInputObjectSchema } from './RegistroCreateNestedManyWithoutActividadInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().max(20).optional(),
  activa: z.boolean().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutActividadesInputObjectSchema),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutActividadInputObjectSchema).optional()
}).strict();
export const ActividadCreateInputObjectSchema: z.ZodType<Prisma.ActividadCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateInput>;
export const ActividadCreateInputObjectZodSchema = makeSchema();
