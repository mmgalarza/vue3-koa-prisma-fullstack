/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuarios" (
    "idUsuario" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Roles" (
    "idRol" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" VARCHAR(150),

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("idRol")
);

-- CreateTable
CREATE TABLE "UsuarioEmpresa" (
    "idUsuarioEmpresa" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "idRol" INTEGER NOT NULL,

    CONSTRAINT "UsuarioEmpresa_pkey" PRIMARY KEY ("idUsuarioEmpresa")
);

-- CreateTable
CREATE TABLE "Config" (
    "idEmpresaSelected" INTEGER NOT NULL,
    "idActividadSelected" INTEGER NOT NULL,
    "idUsuarioSelected" INTEGER NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("idEmpresaSelected","idActividadSelected","idUsuarioSelected")
);

-- CreateTable
CREATE TABLE "Empresas" (
    "idEmpresa" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "direccion" VARCHAR(150),
    "ciudad" VARCHAR(80),
    "pais" VARCHAR(50),
    "telefono" VARCHAR(30),
    "email" VARCHAR(100),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Empresas_pkey" PRIMARY KEY ("idEmpresa")
);

-- CreateTable
CREATE TABLE "Actividad" (
    "idActividad" SERIAL NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "estado" VARCHAR(20) NOT NULL,

    CONSTRAINT "Actividad_pkey" PRIMARY KEY ("idActividad")
);

-- CreateTable
CREATE TABLE "Almacenes" (
    "idAlmacen" SERIAL NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "direccion" VARCHAR(150),
    "responsable" VARCHAR(80),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Almacenes_pkey" PRIMARY KEY ("idAlmacen")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "idCategoria" SERIAL NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "descripcion" VARCHAR(150),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("idCategoria")
);

-- CreateTable
CREATE TABLE "Productos" (
    "idProducto" SERIAL NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "codigo" VARCHAR(40),
    "unidad" VARCHAR(20),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("idProducto")
);

-- CreateTable
CREATE TABLE "Proveedores" (
    "idProveedor" SERIAL NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "direccion" VARCHAR(150),
    "telefono" VARCHAR(30),
    "email" VARCHAR(100),
    "contacto" VARCHAR(80),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Proveedores_pkey" PRIMARY KEY ("idProveedor")
);

-- CreateTable
CREATE TABLE "Listas" (
    "idLista" SERIAL NOT NULL,
    "idProveedor" INTEGER NOT NULL,
    "refNo" VARCHAR(50) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "observacion" VARCHAR(150),

    CONSTRAINT "Listas_pkey" PRIMARY KEY ("idLista")
);

-- CreateTable
CREATE TABLE "ListasDet" (
    "idListaDet" SERIAL NOT NULL,
    "idLista" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "precio" DECIMAL(12,2) NOT NULL,
    "descuento" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "ListasDet_pkey" PRIMARY KEY ("idListaDet")
);

-- CreateTable
CREATE TABLE "Talonarios" (
    "idTalon" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "inicio" INTEGER NOT NULL,
    "fin" INTEGER NOT NULL,
    "actual" INTEGER NOT NULL,

    CONSTRAINT "Talonarios_pkey" PRIMARY KEY ("idTalon")
);

-- CreateTable
CREATE TABLE "TiposDoc" (
    "idTipoDoc" CHAR(3) NOT NULL,
    "nombre" VARCHAR(80) NOT NULL,
    "propio" BOOLEAN NOT NULL,
    "idTalon" INTEGER,

    CONSTRAINT "TiposDoc_pkey" PRIMARY KEY ("idTipoDoc")
);

-- CreateTable
CREATE TABLE "Registro" (
    "idRegistro" SERIAL NOT NULL,
    "idTipoDoc" TEXT NOT NULL,
    "comprobNo" VARCHAR(10) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "idProveedor" INTEGER,
    "idActividad" INTEGER NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("idRegistro")
);

-- CreateTable
CREATE TABLE "RegistroDet" (
    "idRegistroDet" SERIAL NOT NULL,
    "idRegistro" INTEGER NOT NULL,
    "idAlmacen" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "precio" DECIMAL(12,2) NOT NULL,
    "cantidad" DECIMAL(12,3) NOT NULL,
    "descuento" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "RegistroDet_pkey" PRIMARY KEY ("idRegistroDet")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_username_key" ON "Usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_nombre_key" ON "Roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioEmpresa_idUsuario_idEmpresa_key" ON "UsuarioEmpresa"("idUsuario", "idEmpresa");

-- CreateIndex
CREATE UNIQUE INDEX "ListasDet_idLista_idProducto_key" ON "ListasDet"("idLista", "idProducto");

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES "Roles"("idRol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_idEmpresaSelected_fkey" FOREIGN KEY ("idEmpresaSelected") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_idActividadSelected_fkey" FOREIGN KEY ("idActividadSelected") REFERENCES "Actividad"("idActividad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_idUsuarioSelected_fkey" FOREIGN KEY ("idUsuarioSelected") REFERENCES "Usuarios"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actividad" ADD CONSTRAINT "Actividad_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Almacenes" ADD CONSTRAINT "Almacenes_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categorias" ADD CONSTRAINT "Categorias_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categorias"("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listas" ADD CONSTRAINT "Listas_idProveedor_fkey" FOREIGN KEY ("idProveedor") REFERENCES "Proveedores"("idProveedor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListasDet" ADD CONSTRAINT "ListasDet_idLista_fkey" FOREIGN KEY ("idLista") REFERENCES "Listas"("idLista") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListasDet" ADD CONSTRAINT "ListasDet_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TiposDoc" ADD CONSTRAINT "TiposDoc_idTalon_fkey" FOREIGN KEY ("idTalon") REFERENCES "Talonarios"("idTalon") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idTipoDoc_fkey" FOREIGN KEY ("idTipoDoc") REFERENCES "TiposDoc"("idTipoDoc") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idProveedor_fkey" FOREIGN KEY ("idProveedor") REFERENCES "Proveedores"("idProveedor") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idActividad_fkey" FOREIGN KEY ("idActividad") REFERENCES "Actividad"("idActividad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroDet" ADD CONSTRAINT "RegistroDet_idRegistro_fkey" FOREIGN KEY ("idRegistro") REFERENCES "Registro"("idRegistro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroDet" ADD CONSTRAINT "RegistroDet_idAlmacen_fkey" FOREIGN KEY ("idAlmacen") REFERENCES "Almacenes"("idAlmacen") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroDet" ADD CONSTRAINT "RegistroDet_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;
