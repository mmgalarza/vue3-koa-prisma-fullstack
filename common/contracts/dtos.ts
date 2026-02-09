/* =====================================================
   DTOs COMUNES
===================================================== */

export interface SelectOptionDto {
  id: number | string
  label: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

/* ===============================
   Auth DTOs
=============================== */

/* Request login */
export interface LoginDto {
  email: string
  password: string
}

/* Response login */
export interface LoginResponseDto {
  token: string
  expiresIn: number // segundos
  user: {
    idUsuario: number
    username: string
    email: string
    nombre: string
  }
}

/* Refresh token */
export interface RefreshTokenResponseDto {
  token: string
  expiresIn: number
}

/* =====================================================
   USUARIOS
===================================================== */

export interface CreateUsuarioDto {
  username: string
  email: string
  password: string
  nombre: string
}

export interface UpdateUsuarioDto {
  email?: string
  nombre?: string
  activo?: boolean
}

export interface UsuarioListDto {
  idUsuario: number
  username: string
  email: string
  nombre: string
  activo: boolean
}

export interface UsuarioDetailDto {
  idUsuario: number
  username: string
  email: string
  nombre: string
  activo: boolean
  creadoEn: string
}

/* =====================================================
   EMPRESAS
===================================================== */

export interface CreateEmpresaDto {
  nombre: string
  direccion?: string
  ciudad?: string
  pais?: string
  telefono?: string
  email?: string
}

export interface UpdateEmpresaDto {
  nombre?: string
  direccion?: string
  ciudad?: string
  pais?: string
  telefono?: string
  email?: string
  activo?: boolean
}

export interface EmpresaListDto {
  idEmpresa: number
  nombre: string
  activo: boolean
}

export interface EmpresaDetailDto {
  idEmpresa: number
  nombre: string
  direccion?: string
  ciudad?: string
  pais?: string
  telefono?: string
  email?: string
  activo: boolean
}

/* =====================================================
   ACTIVIDADES
===================================================== */

export interface CreateActividadDto {
  idEmpresa: number
  nombre: string
  inicio: string
  fin: string
}

export interface UpdateActividadDto {
  nombre?: string
  inicio?: string
  fin?: string
  estado?: string
}

export interface ActividadListDto {
  idActividad: number
  nombre: string
  estado: string
}

export interface ActividadDetailDto {
  idActividad: number
  nombre: string
  inicio: string
  fin: string
  estado: string
  empresa: {
    idEmpresa: number
    nombre: string
  }
}

/* =====================================================
   PRODUCTOS
===================================================== */

export interface CreateProductoDto {
  nombre: string
  idCategoria: number
  codigo?: string
  unidad?: string
}

export interface UpdateProductoDto {
  nombre?: string
  idCategoria?: number
  codigo?: string
  unidad?: string
  activo?: boolean
}

export interface ProductoListDto {
  idProducto: number
  nombre: string
  codigo?: string
  unidad?: string
  activo: boolean
}

export interface ProductoDetailDto {
  idProducto: number
  nombre: string
  codigo?: string
  unidad?: string
  activo: boolean
  categoria: {
    idCategoria: number
    nombre: string
  }
}

/* =====================================================
   PROVEEDORES
===================================================== */

export interface CreateProveedorDto {
  nombre: string
  direccion?: string
  telefono?: string
  email?: string
  contacto?: string
}

export interface UpdateProveedorDto {
  nombre?: string
  direccion?: string
  telefono?: string
  email?: string
  contacto?: string
  activo?: boolean
}

export interface ProveedorListDto {
  idProveedor: number
  nombre: string
  telefono?: string
  activo: boolean
}

export interface ProveedorDetailDto {
  idProveedor: number
  nombre: string
  direccion?: string
  telefono?: string
  email?: string
  contacto?: string
  activo: boolean
}

/* =====================================================
   REGISTROS (CABECERA + DETALLE)
===================================================== */

export interface CreateRegistroDto {
  idTipoDoc: string
  fecha: string
  idProveedor?: number
  idActividad: number
  detalles: CreateRegistroDetDto[]
}

export interface CreateRegistroDetDto {
  idProducto: number
  idAlmacen: number
  precio: number
  cantidad: number
  descuento: number
}

export interface RegistroListDto {
  idRegistro: number
  fecha: string
  comprobNo: string
  tipoDoc: string
  proveedor?: string
}

export interface RegistroDetailDto {
  idRegistro: number
  fecha: string
  comprobNo: string
  tipoDoc: {
    idTipoDoc: string
    nombre: string
  }
  proveedor?: {
    idProveedor: number
    nombre: string
  }
  actividad: {
    idActividad: number
    nombre: string
  }
  detalles: RegistroDetDto[]
}

export interface RegistroDetDto {
  idRegistroDet: number
  producto: string
  almacen: string
  precio: number
  cantidad: number
  descuento: number
}

/* =====================================================
   CATEGORIAS
===================================================== */

// @/contracts/dtos/categorias.dto.ts

export interface CategoriaListDto {
  idCategoria: number
  nombre: string
  descripcion?: string | null
  activo: boolean
}

export interface CategoriaDetailDto extends CategoriaListDto {
  idEmpresa: number
}

export interface CreateCategoriaDto {
  nombre: string
  descripcion?: string
  idEmpresa: number,
  activo?: boolean
}

export interface UpdateCategoriaDto {
  nombre?: string
  descripcion?: string | null
  activo?: boolean
}

