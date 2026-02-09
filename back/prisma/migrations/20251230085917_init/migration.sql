/*
  Warnings:

  - You are about to drop the column `calle` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `ciudad` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `codigoPostal` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `interno` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `pais` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `provincia` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `responsable` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `codigo` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `imagen` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `unidad` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the `Actividad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Factura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListaPvp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListaPvpDet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Listas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListasDet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Proveedores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Registro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegistroDet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Talonarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TiposDoc` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioEmpresa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Venta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VentaDet` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[idEmpresa]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "TipoProducto" AS ENUM ('SIMPLE', 'COMPUESTO');

-- CreateEnum
CREATE TYPE "EstadoOp" AS ENUM ('BORRADOR', 'CONFIRMADA', 'FACTURADA', 'ANULADA');

-- DropForeignKey
ALTER TABLE "Actividad" DROP CONSTRAINT "Actividad_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_idVenta_fkey";

-- DropForeignKey
ALTER TABLE "ListaPvp" DROP CONSTRAINT "ListaPvp_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "ListaPvpDet" DROP CONSTRAINT "ListaPvpDet_idListaPvp_fkey";

-- DropForeignKey
ALTER TABLE "ListaPvpDet" DROP CONSTRAINT "ListaPvpDet_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "Listas" DROP CONSTRAINT "Listas_idProveedor_fkey";

-- DropForeignKey
ALTER TABLE "ListasDet" DROP CONSTRAINT "ListasDet_idLista_fkey";

-- DropForeignKey
ALTER TABLE "ListasDet" DROP CONSTRAINT "ListasDet_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "Proveedores" DROP CONSTRAINT "Proveedores_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idActividad_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idTipoDoc_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idVenta_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDet" DROP CONSTRAINT "RegistroDet_idAlmacen_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDet" DROP CONSTRAINT "RegistroDet_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDet" DROP CONSTRAINT "RegistroDet_idRegistro_fkey";

-- DropForeignKey
ALTER TABLE "TiposDoc" DROP CONSTRAINT "TiposDoc_idTalon_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEmpresa" DROP CONSTRAINT "UsuarioEmpresa_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idCliente_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idListaPvp_fkey";

-- DropForeignKey
ALTER TABLE "VentaDet" DROP CONSTRAINT "VentaDet_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "VentaDet" DROP CONSTRAINT "VentaDet_idVenta_fkey";

-- AlterTable
ALTER TABLE "Almacenes" DROP COLUMN "calle",
DROP COLUMN "ciudad",
DROP COLUMN "codigoPostal",
DROP COLUMN "interno",
DROP COLUMN "numero",
DROP COLUMN "pais",
DROP COLUMN "provincia",
DROP COLUMN "responsable",
ADD COLUMN     "ubicacion" TEXT,
ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpresa" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Categorias" ADD COLUMN     "idCategoriaPadre" INTEGER,
ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpresa" DROP DEFAULT,
ALTER COLUMN "descripcion" SET DATA TYPE TEXT,
ALTER COLUMN "icono" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Clientes" ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "contacto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Empresas" ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "contacto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "codigo",
DROP COLUMN "imagen",
DROP COLUMN "unidad",
ADD COLUMN     "costo" DECIMAL(65,30),
ADD COLUMN     "idEmpresa" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "tipo" "TipoProducto" NOT NULL DEFAULT 'SIMPLE',
ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "idCategoria" DROP DEFAULT,
ALTER COLUMN "descripcion" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "idEmpresa" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "username" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "nombre" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Actividad";

-- DropTable
DROP TABLE "Factura";

-- DropTable
DROP TABLE "ListaPvp";

-- DropTable
DROP TABLE "ListaPvpDet";

-- DropTable
DROP TABLE "Listas";

-- DropTable
DROP TABLE "ListasDet";

-- DropTable
DROP TABLE "Proveedores";

-- DropTable
DROP TABLE "Registro";

-- DropTable
DROP TABLE "RegistroDet";

-- DropTable
DROP TABLE "Talonarios";

-- DropTable
DROP TABLE "TiposDoc";

-- DropTable
DROP TABLE "UsuarioEmpresa";

-- DropTable
DROP TABLE "Venta";

-- DropTable
DROP TABLE "VentaDet";

-- DropEnum
DROP TYPE "RolUsuario";

-- CreateTable
CREATE TABLE "ProductoComponentes" (
    "id" SERIAL NOT NULL,
    "idProductoPadre" INTEGER NOT NULL,
    "idProductoComponente" INTEGER NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ProductoComponentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductoImagenes" (
    "idImagen" SERIAL NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "orden" INTEGER NOT NULL DEFAULT 1,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductoImagenes_pkey" PRIMARY KEY ("idImagen")
);

-- CreateTable
CREATE TABLE "Operaciones" (
    "idOperacion" SERIAL NOT NULL,
    "estado" "EstadoOp" NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "idCliente" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmedAt" TIMESTAMP(3),
    "idEmpresa" INTEGER NOT NULL,

    CONSTRAINT "Operaciones_pkey" PRIMARY KEY ("idOperacion")
);

-- CreateTable
CREATE TABLE "OperacionDetalle" (
    "idDetalle" SERIAL NOT NULL,
    "idOperacion" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,
    "precioUnitario" DECIMAL(65,30) NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OperacionDetalle_pkey" PRIMARY KEY ("idDetalle")
);

-- CreateTable
CREATE TABLE "ListasPvp" (
    "idListaPvp" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "criterio" "TiposPvp" NOT NULL,
    "fechaGen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idEmpresa" INTEGER NOT NULL,

    CONSTRAINT "ListasPvp_pkey" PRIMARY KEY ("idListaPvp")
);

-- CreateTable
CREATE TABLE "Precios" (
    "idPrecio" SERIAL NOT NULL,
    "idListaPvp" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "precioVenta" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Precios_pkey" PRIMARY KEY ("idPrecio")
);

-- CreateTable
CREATE TABLE "Facturas" (
    "idFactura" SERIAL NOT NULL,
    "idOperacion" INTEGER NOT NULL,
    "cae" TEXT,
    "vencCae" TIMESTAMP(3),
    "neto" DECIMAL(65,30) NOT NULL,
    "iva" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Facturas_pkey" PRIMARY KEY ("idFactura")
);

-- CreateTable
CREATE TABLE "AjustesStock" (
    "idAjuste" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motivo" TEXT NOT NULL,
    "idAlmacen" INTEGER NOT NULL,

    CONSTRAINT "AjustesStock_pkey" PRIMARY KEY ("idAjuste")
);

-- CreateTable
CREATE TABLE "AjustesStockDetalle" (
    "idDetalle" SERIAL NOT NULL,
    "idAjuste" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "AjustesStockDetalle_pkey" PRIMARY KEY ("idDetalle")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductoComponentes_idProductoPadre_idProductoComponente_key" ON "ProductoComponentes"("idProductoPadre", "idProductoComponente");

-- CreateIndex
CREATE INDEX "Precios_idListaPvp_idProducto_idx" ON "Precios"("idListaPvp", "idProducto");

-- CreateIndex
CREATE UNIQUE INDEX "Facturas_idOperacion_key" ON "Facturas"("idOperacion");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_idEmpresa_key" ON "Usuarios"("idEmpresa");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categorias" ADD CONSTRAINT "Categorias_idCategoriaPadre_fkey" FOREIGN KEY ("idCategoriaPadre") REFERENCES "Categorias"("idCategoria") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoComponentes" ADD CONSTRAINT "ProductoComponentes_idProductoPadre_fkey" FOREIGN KEY ("idProductoPadre") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoComponentes" ADD CONSTRAINT "ProductoComponentes_idProductoComponente_fkey" FOREIGN KEY ("idProductoComponente") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductoImagenes" ADD CONSTRAINT "ProductoImagenes_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operaciones" ADD CONSTRAINT "Operaciones_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes"("idCliente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operaciones" ADD CONSTRAINT "Operaciones_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperacionDetalle" ADD CONSTRAINT "OperacionDetalle_idOperacion_fkey" FOREIGN KEY ("idOperacion") REFERENCES "Operaciones"("idOperacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperacionDetalle" ADD CONSTRAINT "OperacionDetalle_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListasPvp" ADD CONSTRAINT "ListasPvp_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Precios" ADD CONSTRAINT "Precios_idListaPvp_fkey" FOREIGN KEY ("idListaPvp") REFERENCES "ListasPvp"("idListaPvp") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Precios" ADD CONSTRAINT "Precios_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facturas" ADD CONSTRAINT "Facturas_idOperacion_fkey" FOREIGN KEY ("idOperacion") REFERENCES "Operaciones"("idOperacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustesStock" ADD CONSTRAINT "AjustesStock_idAlmacen_fkey" FOREIGN KEY ("idAlmacen") REFERENCES "Almacenes"("idAlmacen") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustesStockDetalle" ADD CONSTRAINT "AjustesStockDetalle_idAjuste_fkey" FOREIGN KEY ("idAjuste") REFERENCES "AjustesStock"("idAjuste") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustesStockDetalle" ADD CONSTRAINT "AjustesStockDetalle_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;
