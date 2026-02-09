import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ListasFindManySchema as ListasFindManySchema } from '../findManyListas.schema';
import { ProveedoresCountOutputTypeArgsObjectSchema as ProveedoresCountOutputTypeArgsObjectSchema } from './ProveedoresCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idProveedor: z.boolean().optional(),
  nombre: z.boolean().optional(),
  email: z.boolean().optional(),
  calle: z.boolean().optional(),
  numero: z.boolean().optional(),
  ciudad: z.boolean().optional(),
  provincia: z.boolean().optional(),
  codigoPostal: z.boolean().optional(),
  pais: z.boolean().optional(),
  contacto: z.boolean().optional(),
  activo: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  listas: z.union([z.boolean(), z.lazy(() => ListasFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProveedoresCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProveedoresSelectObjectSchema: z.ZodType<Prisma.ProveedoresSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresSelect>;
export const ProveedoresSelectObjectZodSchema = makeSchema();
