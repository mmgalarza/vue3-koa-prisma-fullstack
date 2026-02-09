import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { ClientesScalarRelationFilterObjectSchema as ClientesScalarRelationFilterObjectSchema } from './ClientesScalarRelationFilter.schema';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './ClientesWhereInput.schema';
import { ListaPvpScalarRelationFilterObjectSchema as ListaPvpScalarRelationFilterObjectSchema } from './ListaPvpScalarRelationFilter.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema';
import { VentaDetListRelationFilterObjectSchema as VentaDetListRelationFilterObjectSchema } from './VentaDetListRelationFilter.schema';
import { FacturaNullableScalarRelationFilterObjectSchema as FacturaNullableScalarRelationFilterObjectSchema } from './FacturaNullableScalarRelationFilter.schema';
import { FacturaWhereInputObjectSchema as FacturaWhereInputObjectSchema } from './FacturaWhereInput.schema';
import { RegistroListRelationFilterObjectSchema as RegistroListRelationFilterObjectSchema } from './RegistroListRelationFilter.schema'

const ventawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VentaWhereInputObjectSchema), z.lazy(() => VentaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VentaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VentaWhereInputObjectSchema), z.lazy(() => VentaWhereInputObjectSchema).array()]).optional(),
  idVenta: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idCliente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional(),
  cliente: z.union([z.lazy(() => ClientesScalarRelationFilterObjectSchema), z.lazy(() => ClientesWhereInputObjectSchema)]).optional(),
  listaPvp: z.union([z.lazy(() => ListaPvpScalarRelationFilterObjectSchema), z.lazy(() => ListaPvpWhereInputObjectSchema)]).optional(),
  detalles: z.lazy(() => VentaDetListRelationFilterObjectSchema).optional(),
  factura: z.union([z.lazy(() => FacturaNullableScalarRelationFilterObjectSchema), z.lazy(() => FacturaWhereInputObjectSchema)]).optional(),
  registros: z.lazy(() => RegistroListRelationFilterObjectSchema).optional()
}).strict();
export const VentaWhereInputObjectSchema: z.ZodType<Prisma.VentaWhereInput> = ventawhereinputSchema as unknown as z.ZodType<Prisma.VentaWhereInput>;
export const VentaWhereInputObjectZodSchema = ventawhereinputSchema;
