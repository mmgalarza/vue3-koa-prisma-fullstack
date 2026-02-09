import * as z from 'zod';
export const EmpresasUpsertResultSchema = z.object({
  idEmpresa: z.number().int(),
  nombre: z.string(),
  email: z.string().optional(),
  calle: z.string(),
  numero: z.string().optional(),
  ciudad: z.string(),
  provincia: z.string(),
  codigoPostal: z.string(),
  pais: z.string(),
  contacto: z.string().optional(),
  activo: z.boolean(),
  UsuarioEmpresas: z.array(z.unknown()),
  clientes: z.array(z.unknown()),
  proveedores: z.array(z.unknown()),
  almacenes: z.array(z.unknown()),
  ventas: z.array(z.unknown()),
  categorias: z.array(z.unknown()),
  actividades: z.array(z.unknown()),
  listasPvp: z.array(z.unknown())
});