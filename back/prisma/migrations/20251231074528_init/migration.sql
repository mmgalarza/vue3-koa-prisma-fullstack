/*
  Warnings:

  - Added the required column `tipo` to the `Categorias` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TCategoria" AS ENUM ('FAMILIA', 'MADRE', 'HIJA');

-- AlterTable
ALTER TABLE "Categorias" ADD COLUMN     "tipo" "TCategoria" NOT NULL;

-- CreateIndex
CREATE INDEX "Categorias_tipo_idx" ON "Categorias"("tipo");

-- CreateIndex
CREATE INDEX "Categorias_idCategoriaPadre_idx" ON "Categorias"("idCategoriaPadre");
