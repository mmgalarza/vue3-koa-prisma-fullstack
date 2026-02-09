import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmpresasOrderByWithRelationInputObjectSchema as EmpresasOrderByWithRelationInputObjectSchema } from './EmpresasOrderByWithRelationInput.schema';
import { ClientesOrderByWithRelationInputObjectSchema as ClientesOrderByWithRelationInputObjectSchema } from './ClientesOrderByWithRelationInput.schema';
import { ListaPvpOrderByWithRelationInputObjectSchema as ListaPvpOrderByWithRelationInputObjectSchema } from './ListaPvpOrderByWithRelationInput.schema';
import { VentaDetOrderByRelationAggregateInputObjectSchema as VentaDetOrderByRelationAggregateInputObjectSchema } from './VentaDetOrderByRelationAggregateInput.schema';
import { FacturaOrderByWithRelationInputObjectSchema as FacturaOrderByWithRelationInputObjectSchema } from './FacturaOrderByWithRelationInput.schema';
import { RegistroOrderByRelationAggregateInputObjectSchema as RegistroOrderByRelationAggregateInputObjectSchema } from './RegistroOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idVenta: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional(),
  idCliente: SortOrderSchema.optional(),
  idListaPvp: SortOrderSchema.optional(),
  empresa: z.lazy(() => EmpresasOrderByWithRelationInputObjectSchema).optional(),
  cliente: z.lazy(() => ClientesOrderByWithRelationInputObjectSchema).optional(),
  listaPvp: z.lazy(() => ListaPvpOrderByWithRelationInputObjectSchema).optional(),
  detalles: z.lazy(() => VentaDetOrderByRelationAggregateInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaOrderByWithRelationInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const VentaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VentaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaOrderByWithRelationInput>;
export const VentaOrderByWithRelationInputObjectZodSchema = makeSchema();
