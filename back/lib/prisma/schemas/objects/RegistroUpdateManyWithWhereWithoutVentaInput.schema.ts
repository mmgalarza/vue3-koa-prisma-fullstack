import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroScalarWhereInputObjectSchema as RegistroScalarWhereInputObjectSchema } from './RegistroScalarWhereInput.schema';
import { RegistroUpdateManyMutationInputObjectSchema as RegistroUpdateManyMutationInputObjectSchema } from './RegistroUpdateManyMutationInput.schema';
import { RegistroUncheckedUpdateManyWithoutVentaInputObjectSchema as RegistroUncheckedUpdateManyWithoutVentaInputObjectSchema } from './RegistroUncheckedUpdateManyWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistroUpdateManyMutationInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateManyWithoutVentaInputObjectSchema)])
}).strict();
export const RegistroUpdateManyWithWhereWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroUpdateManyWithWhereWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateManyWithWhereWithoutVentaInput>;
export const RegistroUpdateManyWithWhereWithoutVentaInputObjectZodSchema = makeSchema();
