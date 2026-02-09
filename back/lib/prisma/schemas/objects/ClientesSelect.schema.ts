import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { VentaFindManySchema as VentaFindManySchema } from '../findManyVenta.schema';
import { ClientesCountOutputTypeArgsObjectSchema as ClientesCountOutputTypeArgsObjectSchema } from './ClientesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idCliente: z.boolean().optional(),
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
  ventas: z.union([z.boolean(), z.lazy(() => VentaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientesSelectObjectSchema: z.ZodType<Prisma.ClientesSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientesSelect>;
export const ClientesSelectObjectZodSchema = makeSchema();
