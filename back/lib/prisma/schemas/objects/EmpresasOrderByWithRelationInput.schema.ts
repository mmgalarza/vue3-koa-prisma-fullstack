import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioEmpresaOrderByRelationAggregateInputObjectSchema as UsuarioEmpresaOrderByRelationAggregateInputObjectSchema } from './UsuarioEmpresaOrderByRelationAggregateInput.schema';
import { ClientesOrderByRelationAggregateInputObjectSchema as ClientesOrderByRelationAggregateInputObjectSchema } from './ClientesOrderByRelationAggregateInput.schema';
import { ProveedoresOrderByRelationAggregateInputObjectSchema as ProveedoresOrderByRelationAggregateInputObjectSchema } from './ProveedoresOrderByRelationAggregateInput.schema';
import { AlmacenesOrderByRelationAggregateInputObjectSchema as AlmacenesOrderByRelationAggregateInputObjectSchema } from './AlmacenesOrderByRelationAggregateInput.schema';
import { VentaOrderByRelationAggregateInputObjectSchema as VentaOrderByRelationAggregateInputObjectSchema } from './VentaOrderByRelationAggregateInput.schema';
import { CategoriasOrderByRelationAggregateInputObjectSchema as CategoriasOrderByRelationAggregateInputObjectSchema } from './CategoriasOrderByRelationAggregateInput.schema';
import { ActividadOrderByRelationAggregateInputObjectSchema as ActividadOrderByRelationAggregateInputObjectSchema } from './ActividadOrderByRelationAggregateInput.schema';
import { ListaPvpOrderByRelationAggregateInputObjectSchema as ListaPvpOrderByRelationAggregateInputObjectSchema } from './ListaPvpOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idEmpresa: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  calle: SortOrderSchema.optional(),
  numero: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ciudad: SortOrderSchema.optional(),
  provincia: SortOrderSchema.optional(),
  codigoPostal: SortOrderSchema.optional(),
  pais: SortOrderSchema.optional(),
  contacto: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activo: SortOrderSchema.optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaOrderByRelationAggregateInputObjectSchema).optional(),
  clientes: z.lazy(() => ClientesOrderByRelationAggregateInputObjectSchema).optional(),
  proveedores: z.lazy(() => ProveedoresOrderByRelationAggregateInputObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesOrderByRelationAggregateInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaOrderByRelationAggregateInputObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasOrderByRelationAggregateInputObjectSchema).optional(),
  actividades: z.lazy(() => ActividadOrderByRelationAggregateInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EmpresasOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EmpresasOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasOrderByWithRelationInput>;
export const EmpresasOrderByWithRelationInputObjectZodSchema = makeSchema();
