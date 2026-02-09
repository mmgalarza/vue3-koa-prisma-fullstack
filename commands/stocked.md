#1 - Diseñamos un analisis de un sistema pequeño para la gestion de almacenes de una empresa.

Aporta en cada entidad los atributos que tu ves habituales y utiles, no muchos algunos simples que es para una demo, es decir atributos que debe ir como la direccion y cosas escenciales.

Config(IdEmpresaSelected[fk], IdActividad[fk]) // Es un single record
Empresas(IdEmpresa[pk, auto], nombre, dirección, ...) // Esta la entidad padre ya que el sistema sera multi-empresa.
Actividad(IdActividad[pk, auto], IdEmpresa[fk], Inicio, Fin) // Las actividades de la empresa que marca el periodo que comprente
Almacenes(IdAlmacen[pk, auto], nombre, IdEmpresa[fk, !null] // Los almacenes son de la empresa
Categorias(IdCategoria[pk, auto], nombre, IdEmpresa[fk], ...) - Las categorias son de la empresa tambien cuando pongo ... rellena con atributos frecuentes.
Productos(IdProducto[pk], nombre, IdCategoria[fk], ...)  // Los productos de las categorias.
Proveedores(IdProveedor[pk], nombre, ...) // Los proveedores
Listas(IdLista[pk], IdProveedor[fk], refno, ...) // Lista de precios de proveedores
ListasDet(IdListaDet[pk, auto], IdLista[fk], IdProducto[fk], precio, ...) // Detalle de lista de precios de productos
Talonarios(IdTalon, nombre, Inicio, Fin, Actual) // Es un registro de talonarios propios donde se registra los numeros de inicio fin y se lleva cuenta del actual usado. ej. TAL01 - inicia: 1000 fin: 2000 actual: 1234
TiposDoc(IdTipoDoc[pk, string*3], nombre, propio[si/no], talonId[fk]) // Tipos de Documentos: FAC - Facturas / REM - Remitos
Registro(IdRegistro[pk, auto], IdTipoDoc[fk], comprobNo[string*10], fecha, IdProveedor[fk, null], IdActividad[fk]) // Registro de comprobantes internos y externos
RegistroDet(IdRegistroDet[pk, auto], IdRegistro[fk], IdAlmacen[fk], IdProducto[fk], precio, cantidad, desc) // Detalle del registro 

#2 - crea el diagrama de Entidad/Relacion y define las reglas.
#3 - creamos los scripts.
    #3.1 - script para mysql.
    #3.2 - script para strapi para que se puedan crear las tablas automaticamente.
    #3.3 - para nodejs
           #3.3.1 - ORM Prisma - crear los modelos
           #3.3.2 - KOA crear las controladores.
           #3.3.3 - KOA crear las api del backend
           #3.3.4 - Añadir modelo usuario y controlador y autentificacion JWT con respectiva API.


