import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3).optional()
}).strict();
export const TiposDocWhereUniqueInputObjectSchema: z.ZodType<Prisma.TiposDocWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocWhereUniqueInput>;
export const TiposDocWhereUniqueInputObjectZodSchema = makeSchema();
