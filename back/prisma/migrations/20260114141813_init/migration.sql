/*
  Warnings:

  - Made the column `idCliente` on table `Operaciones` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Operaciones" DROP CONSTRAINT "Operaciones_idCliente_fkey";

-- AlterTable
ALTER TABLE "Operaciones" ALTER COLUMN "idCliente" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Operaciones" ADD CONSTRAINT "Operaciones_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes"("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE;
