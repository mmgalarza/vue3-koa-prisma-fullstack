/*
  Warnings:

  - You are about to drop the column `direccion` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `Empresas` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Empresas` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `Proveedores` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Proveedores` table. All the data in the column will be lost.
  - You are about to drop the column `comprobNo` on the `Registro` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Registro` table. All the data in the column will be lost.
  - You are about to drop the column `idProveedor` on the `Registro` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `Registro` table. All the data in the column will be lost.
  - You are about to drop the column `descuento` on the `RegistroDet` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `RegistroDet` table. All the data in the column will be lost.
  - You are about to drop the column `propio` on the `TiposDoc` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `rol` on the `Usuarios` table. All the data in the column will be lost.
  - Made the column `ciudad` on table `Empresas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pais` on table `Empresas` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Flujo" AS ENUM ('NO', 'ENTRANTE', 'SALIENTE', 'MIXTO');

-- CreateEnum
CREATE TYPE "TiposPvp" AS ENUM ('MANUAL', 'COSTO_MARGEN', 'POR_CATEGORIA', 'PROMOCION');

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idActividad_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idProveedor_fkey";

-- DropForeignKey
ALTER TABLE "Registro" DROP CONSTRAINT "Registro_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "RegistroDet" DROP CONSTRAINT "RegistroDet_idAlmacen_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_idEmpresa_fkey";

-- AlterTable
ALTER TABLE "Almacenes" DROP COLUMN "direccion",
ADD COLUMN     "calle" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "ciudad" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "codigoPostal" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "interno" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "numero" TEXT,
ADD COLUMN     "pais" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "provincia" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Categorias" ADD COLUMN     "icono" VARCHAR(50);

-- AlterTable
ALTER TABLE "Empresas" DROP COLUMN "direccion",
DROP COLUMN "telefono",
ADD COLUMN     "calle" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "codigoPostal" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "contacto" VARCHAR(80),
ADD COLUMN     "numero" TEXT,
ADD COLUMN     "provincia" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "ciudad" SET NOT NULL,
ALTER COLUMN "ciudad" SET DEFAULT '',
ALTER COLUMN "ciudad" SET DATA TYPE TEXT,
ALTER COLUMN "pais" SET NOT NULL,
ALTER COLUMN "pais" SET DEFAULT '',
ALTER COLUMN "pais" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Listas" ALTER COLUMN "refNo" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "descripcion" VARCHAR(200),
ADD COLUMN     "imagen" VARCHAR(100);

-- AlterTable
ALTER TABLE "Proveedores" DROP COLUMN "direccion",
DROP COLUMN "telefono",
ADD COLUMN     "calle" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "ciudad" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "codigoPostal" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "numero" TEXT,
ADD COLUMN     "pais" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "provincia" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Registro" DROP COLUMN "comprobNo",
DROP COLUMN "idEmpresa",
DROP COLUMN "idProveedor",
DROP COLUMN "idUsuario",
ADD COLUMN     "idVenta" INTEGER,
ADD COLUMN     "numero" VARCHAR(20) NOT NULL DEFAULT '',
ALTER COLUMN "idTipoDoc" DROP DEFAULT,
ALTER COLUMN "idActividad" DROP NOT NULL,
ALTER COLUMN "idActividad" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RegistroDet" DROP COLUMN "descuento",
DROP COLUMN "precio",
ADD COLUMN     "flujoAlmacen" "Flujo" NOT NULL DEFAULT 'NO',
ALTER COLUMN "idRegistro" DROP DEFAULT,
ALTER COLUMN "idAlmacen" DROP NOT NULL,
ALTER COLUMN "idAlmacen" DROP DEFAULT,
ALTER COLUMN "idProducto" DROP DEFAULT,
ALTER COLUMN "cantidad" DROP DEFAULT;

-- AlterTable
ALTER TABLE "TiposDoc" DROP COLUMN "propio",
ADD COLUMN     "movAlmacen" "Flujo" NOT NULL DEFAULT 'NO',
ALTER COLUMN "nombre" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "idEmpresa",
DROP COLUMN "rol";

-- CreateTable
CREATE TABLE "UsuarioEmpresa" (
    "idUsuarioEmpresa" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "rol" "RolUsuario" NOT NULL DEFAULT 'OPERA',

    CONSTRAINT "UsuarioEmpresa_pkey" PRIMARY KEY ("idUsuarioEmpresa")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "idCliente" SERIAL NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "email" VARCHAR(100),
    "calle" TEXT NOT NULL DEFAULT '',
    "numero" TEXT,
    "ciudad" TEXT NOT NULL DEFAULT '',
    "provincia" TEXT NOT NULL DEFAULT '',
    "codigoPostal" TEXT NOT NULL DEFAULT '',
    "pais" TEXT NOT NULL DEFAULT '',
    "contacto" VARCHAR(80),
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "idEmpresa" INTEGER NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "ListaPvp" (
    "idListaPvp" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "criterio" "TiposPvp" NOT NULL,
    "fechaGen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idEmpresa" INTEGER NOT NULL,

    CONSTRAINT "ListaPvp_pkey" PRIMARY KEY ("idListaPvp")
);

-- CreateTable
CREATE TABLE "ListaPvpDet" (
    "idListaPvpDet" SERIAL NOT NULL,
    "idListaPvp" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "precioVenta" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "ListaPvpDet_pkey" PRIMARY KEY ("idListaPvpDet")
);

-- CreateTable
CREATE TABLE "Venta" (
    "idVenta" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(20) NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "idListaPvp" INTEGER NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("idVenta")
);

-- CreateTable
CREATE TABLE "VentaDet" (
    "idVentaDet" SERIAL NOT NULL,
    "idVenta" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "cantidad" DECIMAL(12,3) NOT NULL,
    "precioUnit" DECIMAL(12,2) NOT NULL,
    "descuento" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "VentaDet_pkey" PRIMARY KEY ("idVentaDet")
);

-- CreateTable
CREATE TABLE "Factura" (
    "idVenta" INTEGER NOT NULL,
    "cae" VARCHAR(20),
    "vencCae" TIMESTAMP(3),
    "neto" DECIMAL(14,2) NOT NULL,
    "iva" DECIMAL(14,2) NOT NULL,
    "total" DECIMAL(14,2) NOT NULL,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("idVenta")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioEmpresa_idUsuario_idEmpresa_key" ON "UsuarioEmpresa"("idUsuario", "idEmpresa");

-- CreateIndex
CREATE INDEX "ListaPvpDet_idListaPvp_idProducto_idx" ON "ListaPvpDet"("idListaPvp", "idProducto");

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEmpresa" ADD CONSTRAINT "UsuarioEmpresa_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaPvp" ADD CONSTRAINT "ListaPvp_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaPvpDet" ADD CONSTRAINT "ListaPvpDet_idListaPvp_fkey" FOREIGN KEY ("idListaPvp") REFERENCES "ListaPvp"("idListaPvp") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaPvpDet" ADD CONSTRAINT "ListaPvpDet_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresas"("idEmpresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idListaPvp_fkey" FOREIGN KEY ("idListaPvp") REFERENCES "ListaPvp"("idListaPvp") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentaDet" ADD CONSTRAINT "VentaDet_idVenta_fkey" FOREIGN KEY ("idVenta") REFERENCES "Venta"("idVenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentaDet" ADD CONSTRAINT "VentaDet_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_idVenta_fkey" FOREIGN KEY ("idVenta") REFERENCES "Venta"("idVenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idVenta_fkey" FOREIGN KEY ("idVenta") REFERENCES "Venta"("idVenta") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idActividad_fkey" FOREIGN KEY ("idActividad") REFERENCES "Actividad"("idActividad") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroDet" ADD CONSTRAINT "RegistroDet_idAlmacen_fkey" FOREIGN KEY ("idAlmacen") REFERENCES "Almacenes"("idAlmacen") ON DELETE SET NULL ON UPDATE CASCADE;
