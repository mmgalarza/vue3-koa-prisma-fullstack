-- DropForeignKey
ALTER TABLE "Operaciones" DROP CONSTRAINT "Operaciones_idCliente_fkey";

-- AlterTable
ALTER TABLE "Operaciones" ALTER COLUMN "idCliente" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Operaciones" ADD CONSTRAINT "Operaciones_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Clientes"("idCliente") ON DELETE SET NULL ON UPDATE CASCADE;
