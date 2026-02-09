import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetIdListaIdProductoCompoundUniqueInputObjectSchema as ListasDetIdListaIdProductoCompoundUniqueInputObjectSchema } from './ListasDetIdListaIdProductoCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  idListaDet: z.number().int().optional(),
  idLista_idProducto: z.lazy(() => ListasDetIdListaIdProductoCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ListasDetWhereUniqueInputObjectSchema: z.ZodType<Prisma.ListasDetWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetWhereUniqueInput>;
export const ListasDetWhereUniqueInputObjectZodSchema = makeSchema();
