import * as z from 'zod';
export const ClientesDeleteManyResultSchema = z.object({
  count: z.number()
});