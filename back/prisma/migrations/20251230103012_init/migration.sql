/*
  Warnings:

  - You are about to drop the column `idEmpresa` on the `Almacenes` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Categorias` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `ListasPvp` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Operaciones` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `Usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idUsuario]` on the table `Clientes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idUsuario` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'CLIENTE', 'INVITADO');

-- DropForeignKey
ALTER TABLE "Almacenes" DROP CONSTRAINT "Almacenes_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Categorias" DROP CONSTRAINT "Categorias_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Clientes" DROP CONSTRAINT "Clientes_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "ListasPvp" DROP CONSTRAINT "ListasPvp_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Operaciones" DROP CONSTRAINT "Operaciones_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_idEmpresa_fkey";

-- DropIndex
DROP INDEX "Usuarios_idEmpresa_key";

-- AlterTable
ALTER TABLE "Almacenes" DROP COLUMN "idEmpresa";

-- AlterTable
ALTER TABLE "Categorias" DROP COLUMN "idEmpresa";

-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "idEmpresa",
ADD COLUMN     "idUsuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Empresas" ALTER COLUMN "idEmpresa" SET DEFAULT 1,
ALTER COLUMN "idEmpresa" DROP DEFAULT;
DROP SEQUENCE "Empresas_idEmpresa_seq";

-- AlterTable
ALTER TABLE "ListasPvp" DROP COLUMN "idEmpresa";

-- AlterTable
ALTER TABLE "Operaciones" DROP COLUMN "idEmpresa";

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "idEmpresa";

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "idEmpresa",
ADD COLUMN     "rol" "Rol" NOT NULL DEFAULT 'INVITADO';

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_idUsuario_key" ON "Clientes"("idUsuario");

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;
