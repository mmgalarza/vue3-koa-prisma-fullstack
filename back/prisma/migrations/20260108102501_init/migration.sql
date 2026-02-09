/*
  Warnings:

  - The values [CLIENTE,INVITADO] on the enum `Rol` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `rol` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the `AjustesStock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AjustesStockDetalle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Almacenes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Facturas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListasPvp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrdenFabricacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrdenFabricacionConsumo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrdenFabricacionCosto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Precios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductoComponentes` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Rol_new" AS ENUM ('ADMIN', 'REGISTRADO');
ALTER TABLE "public"."Usuarios" ALTER COLUMN "rol" DROP DEFAULT;
ALTER TABLE "Usuarios" ALTER COLUMN "rol" TYPE "Rol_new" USING ("rol"::text::"Rol_new");
ALTER TYPE "Rol" RENAME TO "Rol_old";
ALTER TYPE "Rol_new" RENAME TO "Rol";
DROP TYPE "public"."Rol_old";
ALTER TABLE "Usuarios" ALTER COLUMN "rol" SET DEFAULT 'REGISTRADO';
COMMIT;

-- DropForeignKey
ALTER TABLE "AjustesStock" DROP CONSTRAINT "AjustesStock_idAlmacen_fkey";

-- DropForeignKey
ALTER TABLE "AjustesStockDetalle" DROP CONSTRAINT "AjustesStockDetalle_idAjuste_fkey";

-- DropForeignKey
ALTER TABLE "AjustesStockDetalle" DROP CONSTRAINT "AjustesStockDetalle_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "Facturas" DROP CONSTRAINT "Facturas_idOperacion_fkey";

-- DropForeignKey
ALTER TABLE "OrdenFabricacion" DROP CONSTRAINT "OrdenFabricacion_idAlmacen_fkey";

-- DropForeignKey
ALTER TABLE "OrdenFabricacion" DROP CONSTRAINT "OrdenFabricacion_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "OrdenFabricacionConsumo" DROP CONSTRAINT "OrdenFabricacionConsumo_idOrden_fkey";

-- DropForeignKey
ALTER TABLE "OrdenFabricacionConsumo" DROP CONSTRAINT "OrdenFabricacionConsumo_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "OrdenFabricacionCosto" DROP CONSTRAINT "OrdenFabricacionCosto_idOrden_fkey";

-- DropForeignKey
ALTER TABLE "Precios" DROP CONSTRAINT "Precios_idListaPvp_fkey";

-- DropForeignKey
ALTER TABLE "Precios" DROP CONSTRAINT "Precios_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "ProductoComponentes" DROP CONSTRAINT "ProductoComponentes_idProductoComponente_fkey";

-- DropForeignKey
ALTER TABLE "ProductoComponentes" DROP CONSTRAINT "ProductoComponentes_idProductoPadre_fkey";

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "rol",
ADD COLUMN     "precios" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "rol" SET DEFAULT 'REGISTRADO';

-- DropTable
DROP TABLE "AjustesStock";

-- DropTable
DROP TABLE "AjustesStockDetalle";

-- DropTable
DROP TABLE "Almacenes";

-- DropTable
DROP TABLE "Facturas";

-- DropTable
DROP TABLE "ListasPvp";

-- DropTable
DROP TABLE "OrdenFabricacion";

-- DropTable
DROP TABLE "OrdenFabricacionConsumo";

-- DropTable
DROP TABLE "OrdenFabricacionCosto";

-- DropTable
DROP TABLE "Precios";

-- DropTable
DROP TABLE "ProductoComponentes";

-- DropEnum
DROP TYPE "EstadoOFab";

-- DropEnum
DROP TYPE "EstadoStock";

-- DropEnum
DROP TYPE "Flujo";

-- DropEnum
DROP TYPE "RolProducto";

-- DropEnum
DROP TYPE "TipoProducto";

-- DropEnum
DROP TYPE "TiposPvp";
