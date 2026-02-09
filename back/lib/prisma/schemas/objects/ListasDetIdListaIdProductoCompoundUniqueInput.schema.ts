import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.number().int(),
  idProducto: z.number().int()
}).strict();
export const ListasDetIdListaIdProductoCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ListasDetIdListaIdProductoCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetIdListaIdProductoCompoundUniqueInput>;
export const ListasDetIdListaIdProductoCompoundUniqueInputObjectZodSchema = makeSchema();
