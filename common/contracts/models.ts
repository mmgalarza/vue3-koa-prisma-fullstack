/* =========================
   Usuarios y Seguridad
========================= */

export interface Usuario {
  idUsuario: number
  username: string
  email: string
  nombre: string
  activo: boolean
  creadoEn: string | Date
  actualizadoEn: string | Date

  configs?: Config[]
  registros?: Registro[]
  empresas?: UsuarioEmpresa[]
}

export interface Rol {
  idRol: number
  nombre: string
  descripcion?: string

  usuarios?: UsuarioEmpresa[]
}

export interface UsuarioEmpresa {
  idUsuarioEmpresa: number
  idUsuario: number
  idEmpresa: number
  idRol: number

  usuario?: Usuario
  empresa?: Empresa
  rol?: Rol
}

/* =========================
   Configuración
========================= */

export interface Config {
  idEmpresaSelected: number
  idActividadSelected: number
  idUsuarioSelected: number

  empresa?: Empresa
  actividad?: Actividad
  usuario?: Usuario
}

/* =========================
   Empresas y Organización
========================= */

export interface Empresa {
  idEmpresa: number
  nombre: string
  direccion?: string
  ciudad?: string
  pais?: string
  telefono?: string
  email?: string
  activo: boolean

  actividades?: Actividad[]
  almacenes?: Almacen[]
  categorias?: Categoria[]
  config?: Config[]
  usuarios?: UsuarioEmpresa[]
}

export interface Actividad {
  idActividad: number
  idEmpresa: number
  nombre: string
  inicio: string | Date
  fin: string | Date
  estado: string

  empresa?: Empresa
  config?: Config[]
  registros?: Registro[]
}

export interface Almacen {
  idAlmacen: number
  nombre: string
  idEmpresa: number
  direccion?: string
  responsable?: string
  activo: boolean

  empresa?: Empresa
  registroDet?: RegistroDet[]
}

/* =========================
   Productos
========================= */

export interface Categoria {
  idCategoria: number
  nombre: string
  idEmpresa: number
  descripcion?: string
  activo: boolean

  empresa?: Empresa
  productos?: Producto[]
}

export interface Producto {
  idProducto: number
  nombre: string
  idCategoria: number
  codigo?: string
  unidad?: string
  activo: boolean

  categoria?: Categoria
  listasDet?: ListaDet[]
  registroDet?: RegistroDet[]
}

/* =========================
   Proveedores y Listas
========================= */

export interface Proveedor {
  idProveedor: number
  nombre: string
  direccion?: string
  telefono?: string
  email?: string
  contacto?: string
  activo: boolean

  listas?: Lista[]
  registros?: Registro[]
}

export interface Lista {
  idLista: number
  idProveedor: number
  refNo: string
  fecha: string | Date
  observacion?: string

  proveedor?: Proveedor
  detalles?: ListaDet[]
}

export interface ListaDet {
  idListaDet: number
  idLista: number
  idProducto: number
  precio: number
  descuento: number

  lista?: Lista
  producto?: Producto
}

/* =========================
   Documentos
========================= */

export interface Talonario {
  idTalon: number
  nombre: string
  inicio: number
  fin: number
  actual: number

  tiposDoc?: TipoDoc[]
}

export interface TipoDoc {
  idTipoDoc: string
  nombre: string
  propio: boolean
  idTalon?: number

  talonario?: Talonario
  registros?: Registro[]
}

/* =========================
   Registros
========================= */

export interface Registro {
  idRegistro: number
  idTipoDoc: string
  comprobNo: string
  fecha: string | Date
  idProveedor?: number
  idActividad: number
  idUsuario: number

  tipoDoc?: TipoDoc
  proveedor?: Proveedor
  actividad?: Actividad
  usuario?: Usuario
  detalles?: RegistroDet[]
}

export interface RegistroDet {
  idRegistroDet: number
  idRegistro: number
  idAlmacen: number
  idProducto: number
  precio: number
  cantidad: number
  descuento: number

  registro?: Registro
  almacen?: Almacen
  producto?: Producto
}
