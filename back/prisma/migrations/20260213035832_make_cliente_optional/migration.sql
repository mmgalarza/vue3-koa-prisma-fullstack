/*
  Warnings:

  - The values [LISTA] on the enum `EstadoComanda` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Cocinero` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Cocinero` table. All the data in the column will be lost.
  - The primary key for the `Comanda` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idCocinero` on the `Comanda` table. All the data in the column will be lost.
  - The `id` column on the `Comanda` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `ComandaItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EstadoComanda_new" AS ENUM ('PENDIENTE', 'PREPARACION', 'FINALIZADA', 'ENTREGADA');
ALTER TABLE "public"."Comanda" ALTER COLUMN "estado" DROP DEFAULT;
ALTER TABLE "Comanda" ALTER COLUMN "estado" TYPE "EstadoComanda_new" USING ("estado"::text::"EstadoComanda_new");
ALTER TYPE "EstadoComanda" RENAME TO "EstadoComanda_old";
ALTER TYPE "EstadoComanda_new" RENAME TO "EstadoComanda";
DROP TYPE "public"."EstadoComanda_old";
ALTER TABLE "Comanda" ALTER COLUMN "estado" SET DEFAULT 'PENDIENTE';
COMMIT;

-- DropForeignKey
ALTER TABLE "Comanda" DROP CONSTRAINT "Comanda_idCocinero_fkey";

-- DropForeignKey
ALTER TABLE "ComandaItem" DROP CONSTRAINT "ComandaItem_idComanda_fkey";

-- DropIndex
DROP INDEX "Comanda_idCocinero_idx";

-- AlterTable
ALTER TABLE "Cocinero" DROP CONSTRAINT "Cocinero_pkey",
DROP COLUMN "id",
ADD COLUMN     "idCocinero" SERIAL NOT NULL,
ADD CONSTRAINT "Cocinero_pkey" PRIMARY KEY ("idCocinero");

-- AlterTable
ALTER TABLE "Comanda" DROP CONSTRAINT "Comanda_pkey",
DROP COLUMN "idCocinero",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Comanda_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "ComandaItem";

-- DropEnum
DROP TYPE "EstadoItem";

-- CreateTable
CREATE TABLE "ComandaProductos" (
    "id" SERIAL NOT NULL,
    "idComanda" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "pedido" INTEGER NOT NULL,
    "servido" INTEGER NOT NULL DEFAULT 0,
    "idCocinero" INTEGER,

    CONSTRAINT "ComandaProductos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ComandaProductos_idProducto_idx" ON "ComandaProductos"("idProducto");

-- CreateIndex
CREATE INDEX "ComandaProductos_idComanda_idx" ON "ComandaProductos"("idComanda");

-- CreateIndex
CREATE INDEX "ComandaProductos_idCocinero_idx" ON "ComandaProductos"("idCocinero");

-- AddForeignKey
ALTER TABLE "ComandaProductos" ADD CONSTRAINT "ComandaProductos_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Productos"("idProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComandaProductos" ADD CONSTRAINT "ComandaProductos_idCocinero_fkey" FOREIGN KEY ("idCocinero") REFERENCES "Cocinero"("idCocinero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComandaProductos" ADD CONSTRAINT "ComandaProductos_idComanda_fkey" FOREIGN KEY ("idComanda") REFERENCES "Comanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;
