/*
  Warnings:

  - You are about to drop the column `estaListo` on the `ComandaItem` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EstadoItem" AS ENUM ('PENDIENTE', 'PREPARANDO', 'SERVIDO');

-- DropForeignKey
ALTER TABLE "ComandaItem" DROP CONSTRAINT "ComandaItem_idComanda_fkey";

-- AlterTable
ALTER TABLE "Cocinero" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ComandaItem" DROP COLUMN "estaListo",
ADD COLUMN     "estado" "EstadoItem" NOT NULL DEFAULT 'PENDIENTE';

-- CreateIndex
CREATE INDEX "Comanda_estado_idx" ON "Comanda"("estado");

-- CreateIndex
CREATE INDEX "Comanda_idCocinero_idx" ON "Comanda"("idCocinero");

-- CreateIndex
CREATE INDEX "ComandaItem_idComanda_idx" ON "ComandaItem"("idComanda");

-- CreateIndex
CREATE INDEX "ComandaItem_estado_idx" ON "ComandaItem"("estado");

-- AddForeignKey
ALTER TABLE "ComandaItem" ADD CONSTRAINT "ComandaItem_idComanda_fkey" FOREIGN KEY ("idComanda") REFERENCES "Comanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;
