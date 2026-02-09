import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { RegistroDetFindManySchema as RegistroDetFindManySchema } from '../findManyRegistroDet.schema';
import { AlmacenesCountOutputTypeArgsObjectSchema as AlmacenesCountOutputTypeArgsObjectSchema } from './AlmacenesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  registrosDet: z.union([z.boolean(), z.lazy(() => RegistroDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AlmacenesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AlmacenesIncludeObjectSchema: z.ZodType<Prisma.AlmacenesInclude> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesInclude>;
export const AlmacenesIncludeObjectZodSchema = makeSchema();
