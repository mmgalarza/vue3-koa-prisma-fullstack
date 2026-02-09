/*
  Warnings:

  - You are about to drop the column `costo` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Productos` table. All the data in the column will be lost.
  - Added the required column `estado` to the `AjustesStockDetalle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoBase` to the `Precios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rol` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RolProducto" AS ENUM ('BASE', 'FABRICADO');

-- CreateEnum
CREATE TYPE "EstadoStock" AS ENUM ('BASE', 'FABRICADO', 'FINAL');

-- CreateEnum
CREATE TYPE "EstadoOFab" AS ENUM ('PLANIFICADA', 'EN_PROCESO', 'FINALIZADA', 'CANCELADA');

-- AlterTable
ALTER TABLE "AjustesStockDetalle" ADD COLUMN     "estado" "EstadoStock" NOT NULL;

-- AlterTable
ALTER TABLE "Precios" ADD COLUMN     "costoBase" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "margen" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "costo",
DROP COLUMN "tipo",
ADD COLUMN     "rol" "RolProducto" NOT NULL;

-- CreateTable
CREATE TABLE "OrdenFabricacion" (
    "idOrden" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" "EstadoOFab" NOT NULL DEFAULT 'PLANIFICADA',
    "idProducto" INTEGER NOT NULL,
    "cantidadPlan" DECIMAL(65,30) NOT NULL,
    "cantidadReal" DECIMAL(65,30),
    "idAlmacen" INTEGER NOT NULL,
    "observaciones" TEXT,

    CONSTRAINT "OrdenFabricacion_pkey" PRIMARY KEY ("idOrden")
);

-- CreateTable
CREATE TABLE "OrdenFabricacionConsumo" (
    "idConsumo" SERIAL NOT NULL,
    "idOrden" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "estadoOrigen" "EstadoStock" NOT NULL,
    "cantidad" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrdenFabricacionConsumo_pkey" PRIMARY KEY ("idConsumo")
);

-- CreateTable
CREATE TABLE "OrdenFabricacionCosto" (
    "idCosto" SERIAL NOT NULL,
    "idOrden" INTEGER NOT NULL,
    "concepto" TEXT NOT NULL,
    "monto" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrdenFabricacionCosto_pkey" PRIMARY KEY ("idCosto")
);

-- AddForeignKey
ALTER TABLE "OrdenFabricacion" ADD CONSTRAINT "OrdenFabricacion_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenFabricacion" ADD CONSTRAINT "OrdenFabricacion_idAlmacen_fkey" FOREIGN KEY ("idAlmacen") REFERENCES "Almacenes"("idAlmacen") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenFabricacionConsumo" ADD CONSTRAINT "OrdenFabricacionConsumo_idOrden_fkey" FOREIGN KEY ("idOrden") REFERENCES "OrdenFabricacion"("idOrden") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenFabricacionConsumo" ADD CONSTRAINT "OrdenFabricacionConsumo_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenFabricacionCosto" ADD CONSTRAINT "OrdenFabricacionCosto_idOrden_fkey" FOREIGN KEY ("idOrden") REFERENCES "OrdenFabricacion"("idOrden") ON DELETE RESTRICT ON UPDATE CASCADE;
