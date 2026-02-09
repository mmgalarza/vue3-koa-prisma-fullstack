import * as z from 'zod';

export const TalonariosScalarFieldEnumSchema = z.enum(['idTalon', 'nombre', 'inicio', 'fin', 'actual'])

export type TalonariosScalarFieldEnum = z.infer<typeof TalonariosScalarFieldEnumSchema>;