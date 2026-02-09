import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './RegistroWhereInput.schema';
import { RegistroUpdateWithoutDetallesInputObjectSchema as RegistroUpdateWithoutDetallesInputObjectSchema } from './RegistroUpdateWithoutDetallesInput.schema';
import { RegistroUncheckedUpdateWithoutDetallesInputObjectSchema as RegistroUncheckedUpdateWithoutDetallesInputObjectSchema } from './RegistroUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RegistroUpdateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutDetallesInputObjectSchema)])
}).strict();
export const RegistroUpdateToOneWithWhereWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroUpdateToOneWithWhereWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateToOneWithWhereWithoutDetallesInput>;
export const RegistroUpdateToOneWithWhereWithoutDetallesInputObjectZodSchema = makeSchema();
