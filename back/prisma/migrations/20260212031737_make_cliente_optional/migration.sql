-- CreateEnum
CREATE TYPE "EstadoComanda" AS ENUM ('PENDIENTE', 'PREPARACION', 'LISTA', 'ENTREGADA');

-- CreateTable
CREATE TABLE "Cocinero" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Cocinero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comanda" (
    "id" TEXT NOT NULL,
    "idOperacion" INTEGER NOT NULL,
    "idCocinero" TEXT,
    "estado" "EstadoComanda" NOT NULL DEFAULT 'PENDIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComandaItem" (
    "id" TEXT NOT NULL,
    "idComanda" TEXT NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "estaListo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ComandaItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comanda_idOperacion_key" ON "Comanda"("idOperacion");

-- AddForeignKey
ALTER TABLE "Comanda" ADD CONSTRAINT "Comanda_idOperacion_fkey" FOREIGN KEY ("idOperacion") REFERENCES "Operaciones"("idOperacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comanda" ADD CONSTRAINT "Comanda_idCocinero_fkey" FOREIGN KEY ("idCocinero") REFERENCES "Cocinero"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComandaItem" ADD CONSTRAINT "ComandaItem_idComanda_fkey" FOREIGN KEY ("idComanda") REFERENCES "Comanda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
