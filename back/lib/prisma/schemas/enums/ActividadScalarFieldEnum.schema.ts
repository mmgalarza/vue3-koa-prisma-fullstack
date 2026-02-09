import * as z from 'zod';

export const ActividadScalarFieldEnumSchema = z.enum(['idActividad', 'idEmpresa', 'nombre', 'inicio', 'fin', 'estado', 'activa'])

export type ActividadScalarFieldEnum = z.infer<typeof ActividadScalarFieldEnumSchema>;