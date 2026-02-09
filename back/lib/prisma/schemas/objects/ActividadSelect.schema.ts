import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { RegistroFindManySchema as RegistroFindManySchema } from '../findManyRegistro.schema';
import { ActividadCountOutputTypeArgsObjectSchema as ActividadCountOutputTypeArgsObjectSchema } from './ActividadCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idActividad: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  nombre: z.boolean().optional(),
  inicio: z.boolean().optional(),
  fin: z.boolean().optional(),
  estado: z.boolean().optional(),
  activa: z.boolean().optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  registros: z.union([z.boolean(), z.lazy(() => RegistroFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActividadCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActividadSelectObjectSchema: z.ZodType<Prisma.ActividadSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActividadSelect>;
export const ActividadSelectObjectZodSchema = makeSchema();
