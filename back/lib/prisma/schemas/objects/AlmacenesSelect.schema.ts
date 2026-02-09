import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { RegistroDetFindManySchema as RegistroDetFindManySchema } from '../findManyRegistroDet.schema';
import { AlmacenesCountOutputTypeArgsObjectSchema as AlmacenesCountOutputTypeArgsObjectSchema } from './AlmacenesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idAlmacen: z.boolean().optional(),
  nombre: z.boolean().optional(),
  interno: z.boolean().optional(),
  calle: z.boolean().optional(),
  numero: z.boolean().optional(),
  ciudad: z.boolean().optional(),
  provincia: z.boolean().optional(),
  codigoPostal: z.boolean().optional(),
  pais: z.boolean().optional(),
  responsable: z.boolean().optional(),
  activo: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  registrosDet: z.union([z.boolean(), z.lazy(() => RegistroDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AlmacenesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AlmacenesSelectObjectSchema: z.ZodType<Prisma.AlmacenesSelect> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesSelect>;
export const AlmacenesSelectObjectZodSchema = makeSchema();
