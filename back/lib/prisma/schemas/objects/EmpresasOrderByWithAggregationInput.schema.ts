import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EmpresasCountOrderByAggregateInputObjectSchema as EmpresasCountOrderByAggregateInputObjectSchema } from './EmpresasCountOrderByAggregateInput.schema';
import { EmpresasAvgOrderByAggregateInputObjectSchema as EmpresasAvgOrderByAggregateInputObjectSchema } from './EmpresasAvgOrderByAggregateInput.schema';
import { EmpresasMaxOrderByAggregateInputObjectSchema as EmpresasMaxOrderByAggregateInputObjectSchema } from './EmpresasMaxOrderByAggregateInput.schema';
import { EmpresasMinOrderByAggregateInputObjectSchema as EmpresasMinOrderByAggregateInputObjectSchema } from './EmpresasMinOrderByAggregateInput.schema';
import { EmpresasSumOrderByAggregateInputObjectSchema as EmpresasSumOrderByAggregateInputObjectSchema } from './EmpresasSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => EmpresasCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EmpresasAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EmpresasMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EmpresasMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EmpresasSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EmpresasOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EmpresasOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasOrderByWithAggregationInput>;
export const EmpresasOrderByWithAggregationInputObjectZodSchema = makeSchema();
